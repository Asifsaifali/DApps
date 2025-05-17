import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";
import * as motion from "motion/react-client"



const Box = {
   margin : "10px",
}
const SendTransaction = () => {
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
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
             whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.2 }}
            style={Box}
        onClick={sendTokens}>Send</motion.button>
    </div>
}

export default SendTransaction