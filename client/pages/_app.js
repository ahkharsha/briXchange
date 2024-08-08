import React from "react";
import { AnonAadhaarProvider } from "@anon-aadhaar/react";
import toast, { Toaster } from "react-hot-toast";
import { StateContextProvider } from "../context";
import { useRouter } from "next/router";
import "../styles/globals.css";

const useTestAadhaar = true; // Change to false if using real Aadhaar

export default function App({ Component, pageProps }) {
  const router = useRouter();

  React.useEffect(() => {
    const isVerified = localStorage.getItem("isVerified");
    if (!isVerified && router.pathname !== "/verification") {
      router.push("/verification");
    }
  }, [router]);

  return (
    <AnonAadhaarProvider _useTestAadhaar={useTestAadhaar}>
      <StateContextProvider>
        <Component {...pageProps} />
        <Toaster />
      </StateContextProvider>
      {/* Your scripts */}
    </AnonAadhaarProvider>
  );
}
