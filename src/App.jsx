import './App.css'
import Airdrop from "./Airdrop.jsx";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
  WalletConnectButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";

function App() {
  return (
    <>                              
      <ConnectionProvider endpoint={'https://mainnet.helius-rpc.com/?api-key=e9a32938-d055-4225-8979-10aa77f1bad5'}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
          <WalletMultiButton/>
            <WalletDisconnectButton/>
              <h1>Hello react</h1>
              <Airdrop></Airdrop>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </> 
  );
}

export default App;
