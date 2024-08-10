import { useState } from "react";
import TokenDetailsComponent from "../components/TokenDetailsComponent";
import ChooseChainComponent from "../components/ChoseChainComponent";
import ToWBTCComponent from "../components/toWBTCComponent";
import { Button } from "flowbite-react";
import { useAccount } from "wagmi";

export function Stepper() {
    const [currentStep, setCurrentStep] = useState(1);
    const account = useAccount();

    const stepperOptions = [
        {
            label: 1,
            value: 'Chain of Deployment'
        },
        {
            label: 2,
            value: 'Wrapped Tokens Import'
        },
        {
            label: 3,
            value: 'Token Details'
        },
        { 
            label: 4,
            value: 'Confirmation'
        }
    ];

    const renderStepContent = () => {
        switch(currentStep) {
            case 1:
                return <ChooseChainComponent />;
            case 2:
                return <ToWBTCComponent/>;
            case 3:
                return  <TokenDetailsComponent />;
            // Add cases for other steps as needed
            default:
                return null;
        }
    };

    const handleNext = () => {
        if (currentStep < stepperOptions.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <>
            <ol className="flex items-center flex-row justify-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                {stepperOptions.map((option, index) => {
                    if (option.label === 2 && account.chainId !== 11155111) {
                        // Do not render the "Wrapped Tokens Import" option if the selected chain is not Sepolia
                        return null;
                    }

                    return (
                        <li key={index} className={`flex items-center ${currentStep === option.label ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}>
                            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                            {option.label > 2 ? (account.chainId === 11155111 ? option.label: option.label-1) : option.label}
                            </span>

                            {option.value}
                            {option.label !== 4 && (
                                <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                                </svg>
                            )}
                        </li>
                    );
                })}
            </ol>
            <div className="step-content">
                {renderStepContent()}
            </div>
            <div className="flex flex-row items-center justify-between mt-4">
                <Button color='purple' onClick={handlePrevious} disabled={currentStep === 1} className="btn btn-secondary">
                    Previous
                </Button>
                <Button color='purple' onClick={handleNext} disabled={currentStep === stepperOptions.length} className="btn btn-primary">
                    Next
                </Button>
            </div>
        </>
    );
}

export default function Tokenize() {
    return (
        <Stepper />
    );
}
