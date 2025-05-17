import "./../App.css";
import PixelCard from "./PixelCard.jsx";
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
import SendTransaction from "./SendTransaction.jsx";

const TxnLibrary = () => {
  return (
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
              <SendTransaction />
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
    </PixelCard>
  );
};

export default TxnLibrary;
