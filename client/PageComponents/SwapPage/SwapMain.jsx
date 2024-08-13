import React from "react";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

const SwapMain = () => {
  const account = useAccount();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-extrabold tracking-tight leading-none text-center mb-6 md:text-6xl lg:text-7xl">
        Token Swapper
      </h1>
      <p className="max-w-3xl text-center mb-10 text-xl font-normal lg:text-2xl leading-relaxed">
        Invest in fractional real estate ownership across multiple blockchains. Our platform seamlessly connects investors with diverse property opportunities, offering transparency, security, and liquidity through auction-based tokenization.
      </p>
      <p className="max-w-3xl text-center mb-10 text-xl font-normal lg:text-2xl leading-relaxed">
        For Bitcoin Investors, fear not! We use the{" "}
        <a
          href="https://docs.garden.finance/home/basics/"
          className="font-semibold text-indigo-400 hover:text-indigo-300"
        >
          Garden Finance SDK
        </a>{" "}
        to swap your BTC to wBTC and vice-versa, allowing you to invest in our cross-chain Real Estate Tokens!
      </p>
      <ConnectKitButton />
      {account.isConnected && (
        <div className="pt-12">
          <a
            href="/tokenize"
            className="rounded-md bg-[#8F00FF] px-6 py-4 text-xxl font-semibold text-white shadow-sm hover:bg-[#008bdb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a3ff]"
          >
            Swap your tokens!
          </a>
        </div>
      )}
    </div>
  );
};

export default SwapMain;
