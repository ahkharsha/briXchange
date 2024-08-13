import React from "react";
import TransactionsComponent from "../Components/GardenComponents/TransactionComponent";
import Balances from "../Components/GardenComponents/Balances";
import { useGardenSetup } from "../Components/GardenComponents/store";
// import "../../styles/assets/css/GardenStyles.css";
import ReverseSwapComponent from "../Components/GardenComponents/ReverseSwapComponent";

function ToWBTCComponent() {
  useGardenSetup();
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center items-center py-12 lg:px-8">
        <div className="lg:w-full sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Swap your BTC to wBTC on Ethereum Sepolia
                </h2>
                <hr></hr>
                <h2 className="mt-1 text-center text-md leading-9 tracking-tight text-gray-900">
                    Account Balances
                </h2>
            </div>
            <Balances />
            <div id="container">
            <ReverseSwapComponent/>
            <TransactionsComponent></TransactionsComponent>

            </div>
    </div>
  );
}

export default ToWBTCComponent;
