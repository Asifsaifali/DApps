# 🪙Solana Wallet Adapter

## Project Description

- A decentralized application (DApp) that integrates with blockchain wallets using a Wallet Adapter. Users can   connect their wallets, sign transactions, and interact with the blockchain securely and seamlessly.

### 🚀 Features
- Wallet connection (Phantom, MetaMask, etc.)
- Transaction signing
- Blockchain interaction (read/write)
- Fully reactive UI with Web3 state
- wallet-adapter-react-ui

Visit the [Demo](https://wallet-adapter-three.vercel.app) to see it in action!

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS / Material UI
- **Blockchain:** Solana, Web3.js
- **Wallet Integration:** `@solana/wallet-adapter-*`


## 📁 Project Structure

- src
- ├── components/ # Reusable UI components
   - ├── Airdrop.jsx
   - ├── ConnectButton.jsx
   - ├── TransactionForm.jsx
   - ├── TransactionList.jsx
   - ├── WalletInfo.jsx
- ├── contexts
   - ├── WalletProvider.jsx
- ├── App.jsx
- └── index.jsx
---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Asifsaifali/Wallet-Adapter.git
cd Wallet-Adapter
```
### 2. Install dependencies
    
```bash
npm run install
```
### 3. Run the app locally
```bash
Copy code
npm start
```
Visit: http://localhost:3000

### 4. 🔗Wallet Adapter Setup

Required Packages:
```bash
npm install @solana/web3.js \
@solana/wallet-adapter-react \
@solana/wallet-adapter-wallets \
@solana/wallet-adapter-react-ui
```
## 🖼️ Screenshots

### 🔐 Home Page
![HomePage](./assets/Home.png)

### 🔐 Wallet Connected
![Wallet Connected](./assets/Aidrop.png)

### 📨 Sending Transaction
![Send Transaction](./assets/Trans.png)