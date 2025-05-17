import "./../App.css";
import { motion } from "framer-motion";
import PixelCard from "./PixelCard.jsx";
import Airdrop from "./Airdrop.jsx";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
  WalletConnectButton,
} from "@solana/wallet-adapter-react-ui";

import "@solana/wallet-adapter-react-ui/styles.css";

const AirdropLibrary = () => {
  return (
    <>
     <motion.h1 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className='heading'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
         style={{fontFamily: 'cursive', margin:"20px"}} >Airdrop in Wallet..!</motion.h1>    
     
    <PixelCard
      className="custom-spotlight-card"
      spotlightColor="rgba(5, 214, 237, 0.2)"
    >
      <div className="container">
        <ConnectionProvider
          endpoint={
            "https://solana-devnet.g.alchemy.com/v2/BkS1vuFaAKpDzB7HKWiwuPXkfsl-Hx7b"
          }
        >
          <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <WalletMultiButton className="button" />
              <WalletDisconnectButton />
              <Airdrop/>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
    </PixelCard>
    </>
  );
};

export default AirdropLibrary;
