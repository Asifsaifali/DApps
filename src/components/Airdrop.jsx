import { useState } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import "./../App.css";
import { useNavigate } from "react-router-dom";
// import DataInput from "./assets/Input";
const Airdrop = () => {
  const wallet = useWallet();
  const navigate = useNavigate()

  const { connection } = useConnection();

  const [balance, setBalance] = useState(0);
  const [value, setValue] = useState(false);

  const sendAirDropToUser = async () => {
    if (!wallet.connected) {
      alert("Please connect your wallet");
      return;
    }
    const amount = document.getElementById("publicKey").value;
    if (!publicKey) {
      alert("Please enter a valid public key");
      return;
    }
    if(!amount){
      alert("Please enter a valid amount");
      return;
    }
    await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);

    alert(`Airdrop to user ${wallet.publicKey.toString()}`);
  };

  const showBalance = async () => {
    if (!wallet.connected) {
      alert("Please connect your wallet");
      return;
    }
    const response = await connection.getBalance(wallet.publicKey);

    setBalance(response);
    setValue(true);
    // alert(`Your balance is ${response / 1000000000} SOL`)
  };
  return (
    <>
      <div className="airdrop">
        <input
          className="input"
          id="publicKey"
          type="text"
          placeholder="Enter your wallet address"
        />
        <button
          style={{ margin: "10px", width: "300px" }}
          onClick={sendAirDropToUser}
        >
          Send Airdrop
        </button>
      </div>
      <div>
        <button
          style={{ margin: "10px", width: "300px" }}
          onClick={showBalance}
        >
          Show Balance
        </button>
        {value && <h2 style={{color:"white"}} >Your Balance is : {balance / 1000000000} SOL</h2>}
      </div>
      <div>
         <button
          style={{ margin: "10px" }}
          onClick={()=>{ navigate("/")}}
        >
         Go Back
        </button>
      </div>
    </>
  );
};

export default Airdrop;
