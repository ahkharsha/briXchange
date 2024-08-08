import React, { useState, useEffect } from "react";
import { LogInWithAnonAadhaar, useAnonAadhaar } from "@anon-aadhaar/react";
import Web3 from "web3";
import {
  Button,
  Container,
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  Box,
} from "@mui/material";

export default function AadhaarVerification({ onVerified }) {
  const [anonAadhaar] = useAnonAadhaar();
  const [account, setAccount] = useState(null);

  // Function to connect to MetaMask
  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        const web3 = new Web3(window.ethereum);
        console.log("Connected to MetaMask with account:", accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      console.error("MetaMask is not installed");
    }
  };

  useEffect(() => {
    if (anonAadhaar.status === "logged-in") {
      onVerified();
    }
  }, [anonAadhaar, onVerified]);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Aadhaar Verification</Typography>
        </Toolbar>
      </AppBar>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Container
          maxWidth="md"
          style={{ flex: 1, marginTop: "2rem", marginBottom: "2rem" }}
        >
          <Box textAlign="center" marginBottom="2rem">
            <Typography variant="h3" gutterBottom>
              Welcome to Aadhaar Verification Portal
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Please connect your MetaMask wallet and verify your Aadhaar
              details.
            </Typography>
          </Box>
          <Box textAlign="center">
            {!account ? (
              <Button
                variant="contained"
                color="primary"
                onClick={connectToMetaMask}
              >
                Connect MetaMask
              </Button>
            ) : (
              <div>
                <Typography variant="h6" gutterBottom>
                  Connected with MetaMask account: {account}
                </Typography>
                <LogInWithAnonAadhaar
                  nullifierSeed={1234}
                  fieldsToReveal={["revealAgeAbove18", "revealPinCode"]}
                />
                <Typography
                  variant="h6"
                  color="textSecondary"
                  style={{ marginTop: "1rem" }}
                >
                  {anonAadhaar?.status}
                </Typography>
              </div>
            )}
          </Box>
        </Container>
        <Box
          component="footer"
          py={3}
          textAlign="center"
          bgcolor="primary.main"
          color="white"
          mt="auto"
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Aadhaar Verification Portal. All rights
            reserved.
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}