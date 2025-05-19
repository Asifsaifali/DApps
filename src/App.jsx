import './App.css'
import  { AnimatePresence } from 'framer-motion';
import HomePage from './components/HomePage.jsx';
import AirdropLibrary from './components/AirdropLibrary.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TxnLibrary from './components/TxnLibrary.jsx';

function App() {
  return (
    <>    
    <AnimatePresence>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/airdrop" element={<AirdropLibrary/>} />
        <Route path="/transaction" element={<TxnLibrary/>} /> 
      </Routes>
    </Router>
    </AnimatePresence>
    </> 
  );
}

export default App;
