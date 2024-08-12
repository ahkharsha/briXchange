// import SwapComponent from "./SwapComponent";
import React from "react";
import TransactionsComponent from "../Components/GardenComponents/TransactionComponent";
import Balances from "../Components/GardenComponents/Balances";
import { useGardenSetup } from "../Components/GardenComponents/store";
// import "../styles/GardenStyles.css";
import SwapComponent from "../Components/GardenComponents/SwapComponent";

const ReverseSwap = () => {
  useGardenSetup();
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center items-center py-12 lg:px-8">
      <div className="lg:w-full sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Swap your wBTC to BTC via Ethereum Sepolia
        </h2>
        <hr></hr>
        <h2 className="mt-1 text-center text-md leading-9 tracking-tight text-white">
          Account Balances
        </h2>
      </div>
      <Balances />
      <div id="container">
        <SwapComponent />
        <TransactionsComponent></TransactionsComponent>
      </div>
    </div>
  );
};

export default ReverseSwap;
