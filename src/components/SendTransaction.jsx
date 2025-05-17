import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";
import * as motion from "motion/react-client"
import { useNavigate } from "react-router-dom";



const Box = {
   margin : "10px",
}
const SendTransaction = () => {
    const wallet = useWallet();
    const navigate = useNavigate()
    const {connection} = useConnection();

    async function sendTokens() {
        if(!wallet.connected){
            alert("Please connect your wallet");
            return;
        }
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
        if(!to || !amount){
            alert("Please enter a valid address and amount");
            return;
        }
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        }));

        await wallet.sendTransaction(transaction, connection);
        alert("Sent " + amount + " SOL to " + to);
    }

    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vh",
    }}>
        <input className="input" id="to" type="text" placeholder="To" />
        <input className="input" id="amount" type="text" placeholder="Amount" />
        <motion.button className="button"
             whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.2 }}
            style={Box}
        onClick={sendTokens}>Send</motion.button>
         <motion.button
           whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.2 }}
         className="button"
          onClick={()=>{ navigate("/")}}
        >
         Go Back
        </motion.button>
    </div>
}

export default SendTransaction