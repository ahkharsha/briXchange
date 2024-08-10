// import SwapComponent from "./SwapComponent";
import React from "react";
import TransactionsComponent from "../garden-components/TransactionComponent";
import Balances from "../garden-components/Balances";
import { useGardenSetup } from "../garden-components/store";
import "../styles/GardenStyles.css";
import SwapComponent from "../garden-components/SwapComponent";

function ToBTCComponent() {
  useGardenSetup();
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center items-center py-12 lg:px-8">
        <div className="lg:w-full sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Swap your wBTC to BTC via Ethereum Sepolia
                </h2>
                <hr></hr>
                <h2 className="mt-1 text-center text-md leading-9 tracking-tight text-gray-900">
                    Account Balances
                </h2>
            </div>
            <Balances />
            <div id="container">
            <SwapComponent/>
            <TransactionsComponent></TransactionsComponent>

            </div>
            
            
        
      

    </div>

      
    
  );
}

export default ToBTCComponent;
