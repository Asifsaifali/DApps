
import { useWallet, useConnection } from "@solana/wallet-adapter-react"

const Airdrop = () => {

    const wallet  = useWallet()

    const {connection} = useConnection()

    const sendAirDropToUser = async()=>{
        const amount = document.getElementById("publicKey").value
        // if(!publicKey){
        //     alert("Please enter a valid public key")
        //     return
        // }'
        console.log(amount);
     await connection.requestAirdrop(wallet.publicKey,amount * 1000000000)
      
       alert(`Airdrop to user ${wallet.publicKey.toString()}`)
    }

    const showBalance = async()=>{
        const response = await connection.getBalance(wallet.publicKey)
      console.log("balance is",response);
        alert(`Your balance is ${response} SOL`)
    }
  return (
    <>
    <div>
        <input id="publicKey" type="text" placeholder="Enter your wallet address" />
        <button onClick={sendAirDropToUser}>Send Airdrop</button>
    </div>
    <div>
        <button onClick={showBalance}>Show Balance</button>
    </div>
    </>
  )
}

export default Airdrop