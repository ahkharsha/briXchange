import { Button, Label, Radio } from "flowbite-react";
import { useAccount } from "wagmi";
import { useState } from "react";
import { ConnectKitButton } from "connectkit";
import { useSwitchChain } from "wagmi";

export const CHAIN_IDS = [
  {
    chainID: 11155111,
    chainName: "Bitcoin/Ethereum Sepolia",
    currency: "wBTC",
    explorer: "https://sepolia.etherscan.io/address",
  },
  {
    chainID: 1115,
    chainName: "Core DAO Testnet",
    currency: "tCoRE",
    explorer: "https://scan.test.btcs.network/address",
  },
];

export default function ChooseChainComponent() {
  const account = useAccount();
  const { chains, switchChain } = useSwitchChain();
  const [selectedChain, setSelectedChain] = useState(account?.chainId || "");

  const handleChainChange = (event) => {
    setSelectedChain(Number(event.target.value));
  };

  return (
    <div className="chain-component">
      <div className="chain-header">
        <h2 className="chain-title">Choose Your Chain</h2>
      </div>

      <fieldset className="chain-options">
        {CHAIN_IDS.map((chain, index) => (
          <div key={chain.chainID} className="chain-option">
            <Radio
              id={`chain-${index}`}
              name="chain"
              value={chain.chainID}
              checked={Number(selectedChain) === chain.chainID}
              onChange={handleChainChange}
            />
            <Label className="chain-label" htmlFor={`chain-${index}`}>
              {chain.chainName}
            </Label>
          </div>
        ))}
      </fieldset>

      {Number(selectedChain) !== account?.chainId && (
        <div className="chain-change">
          <h4 className="chain-change-title">Change Your Chain Here</h4>
          <Button
            color="purple"
            className="chain-change-button"
            onClick={() => switchChain({ chainId: Number(selectedChain) })}
          >
            Change Chain
          </Button>
        </div>
      )}
    </div>
  );
}
