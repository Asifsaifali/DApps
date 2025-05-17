import * as motion from "motion/react-client";
import "animate.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const showAirdrop = () => {
    navigate("/airdrop");
  };

  const showTxn = () => {
    navigate("/transaction");
  };
  return (
    <>
      <motion.h1
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="animate__animated animate__bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="heading"
        style={{ fontFamily: "cursive", margin: "20px" }}
      >
        Welcome to the React Wallet..!
      </motion.h1>

      <motion.button
        onClick={showAirdrop}
        style={{ border: "1px solid black", margin: "10px" }}
      >
        Send Airdrop
      </motion.button>
      <motion.button onClick={showTxn} style={{ border: "1px solid black" }}>
        Send a Transaction
      </motion.button>
    </>
  );
};

export default HomePage;
