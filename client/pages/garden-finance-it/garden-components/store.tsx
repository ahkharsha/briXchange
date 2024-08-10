import { useEffect } from "react";
import { create } from "zustand";
import { EVMWallet } from "@catalogfi/wallets";
import { BrowserProvider,Wallet,JsonRpcProvider} from "ethers";

import { GardenJS } from "@gardenfi/core";
import { Orderbook, Chains,TESTNET_ORDERBOOK_API} from "@gardenfi/orderbook";

import {
  BitcoinNetwork,
  BitcoinProvider,
  BitcoinOTA,
} from "@catalogfi/wallets";

type EvmWalletState = {
  metaMaskIsConnected: boolean;
  evmProvider: BrowserProvider | null;
};

type EvmWalletAction = {
  connectMetaMask: () => Promise<void>;
};

const networkConfig = {
  chainId: "0xaa36a7",
  chainName: "Sepolia",
  rpcUrls: ["https://sepolia.infura.io/v3/"],
  nativeCurrency: {
    symbol: "SepoliaETH",
    decimals: 18,
  },
};

const useMetaMaskStore = create<EvmWalletState & EvmWalletAction>((set) => ({
  metaMaskIsConnected: false,
  evmProvider: null,
  connectMetaMask: async () => {
    if (window.ethereum !== null) {
      let provider = new BrowserProvider(window.ethereum);
      let network = await provider.getNetwork();
      console.log("network: ",network);
      
      if (network.chainId !== 11155111n) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [networkConfig],
        });
        provider = new BrowserProvider(window.ethereum);
      }
      set(() => ({
        evmProvider: provider,
        metaMaskIsConnected: true,
      }));
    } else {
      throw new Error("MetaMask not Found");
    }
  },
}));



const signer = await new BrowserProvider(window.ethereum).getSigner();
const evmWallet = new EVMWallet(signer);

const provider = new BitcoinProvider(BitcoinNetwork.Testnet);
//const signer = await new BrowserProvider(window.ethereum).getSigner();
const bitcoinWallet = new BitcoinOTA(provider, signer);

type GardenStore = {
  garden: GardenJS | null;
  bitcoin: BitcoinOTA | null;
  ethereum: EVMWallet | null;
  setGarden: (garden: GardenJS, bitcoin: BitcoinOTA, ethereum: EVMWallet) => void;
};

const gardenStore = create<GardenStore>((set) => ({
  garden: null,
  bitcoin: bitcoinWallet,
  ethereum:evmWallet,
  setGarden: (garden: GardenJS, bitcoin: BitcoinOTA,ethereum:EVMWallet) => {
    set(() => ({
      garden,
      bitcoin,
      ethereum
    }));
  },
}));

type SignStore = {
  isMMPopupOpen: boolean;
  isSigned: boolean;
  setIsMMPopupOpen: (isMMPopupOpen: boolean) => void;
  setIsSigned: (isSigned: boolean) => void;
};

const useSignStore = create<SignStore>((set) => ({
  isMMPopupOpen: false,
  isSigned: false,
  setIsMMPopupOpen: (isMMPopupOpen: boolean) => {
    set(() => {
      return { isMMPopupOpen };
    });
  },
  setIsSigned: (isSigned: boolean) => {
    set(() => {
      return { isSigned };
    });
  },
}));

const useGarden = () => ({
  garden: gardenStore((state) => state.garden),
  bitcoin: gardenStore((state) => state.bitcoin),
  ethereum: gardenStore((state)=>state.ethereum)
});

/* Only to be used once at the root level*/
const useGardenSetup = () => {
  const { evmProvider } = useMetaMaskStore();
  const { setGarden } = gardenStore();

  useEffect(() => {
    (async () => {
      if (!evmProvider) return;
      const signer = await evmProvider.getSigner();

      // const bitcoinProvider = new BitcoinProvider(
      //   BitcoinNetwork.Testnet,
      //   "http://localhost:30000"
      // );

      const orderbook = await Orderbook.init({
        url: TESTNET_ORDERBOOK_API,
        signer,
        // opts: {
        //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
        //   domain: (window as any).location.host,
        //   store: localStorage,
          
        // },
      });

      const wallets = {
        [Chains.bitcoin_testnet]: bitcoinWallet,
        [Chains.ethereum_sepolia]: evmWallet,
        
      };

      const garden = new GardenJS(orderbook, wallets);

      setGarden(garden, wallets[Chains.bitcoin_testnet],wallets[Chains.ethereum_sepolia]);
    })();
  }, [evmProvider, setGarden]);
};

export { useMetaMaskStore, useGarden, useGardenSetup, useSignStore };
