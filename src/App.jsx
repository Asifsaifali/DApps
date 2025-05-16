import './App.css'
import PixelCard from './components/PixelCard.jsx';
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
    <PixelCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">               
    <div className='container'>    
      <ConnectionProvider endpoint={'https://solana-devnet.g.alchemy.com/v2/BkS1vuFaAKpDzB7HKWiwuPXkfsl-Hx7b'}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
          <WalletMultiButton className='button'/>
            <WalletDisconnectButton/>

              <Airdrop></Airdrop>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
      </div>      
      </PixelCard>
    </> 
  );
}

export default App;
