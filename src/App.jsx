import './App.css'
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
import HomePage from './components/HomePage.jsx';
import AirdropLibrary from './components/AirdropLibrary.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TxnLibrary from './components/TxnLibrary.jsx';

function App() {
  return (
    <>    
    
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/airdrop" element={<AirdropLibrary/>} />
        <Route path="/transaction" element={<TxnLibrary/>} /> 
      </Routes>
    </Router>
    </> 
  );
}

export default App;
