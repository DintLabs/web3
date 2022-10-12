const { ethers } = require("ethers");

const INFURA_ID = 'bc694a63cddd4233a0dc6b512f87fd6e'
const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mainnet.infura.io/v3/${INFURA_ID}`)

const account1 = '0x091fadB9c1E0f7e0E82280d0549cd82f1f296Db8' // Your account address 1
const account2 = '0xE620bA5Ce8204Aab8567f9Dd391D99a6e7F6e59e' // Your account address 2

const privateKey1 = '2e5f27b8159946f97ebc735d19d8d4dd9a2fb24c3bbe58c92c587d34bb93cb6d' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];

const address = '0x40763DF31955CB3Bad544Cbed3E1953a9B063311'
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const balance = ethers.utils.parseEther("0.015")
  

    console.log(`\nReading from ${address}\n`)
    console.log(`Balance of sender: ${balance}\n`)

 const contractWithWallet = contract.connect(wallet)  
 const tx = await contractWithWallet.transfer(account2, balance, {gasPrice: ethers.utils.parseUnits('100', 'gwei'), gasLimit: 1000000});

    await tx.wait()
    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)
    const balanceOfReciever = await contract.balanceOf(account2)

    console.log(`\nBalance of sender: ${balanceOfSender}`)
    console.log(`Balance of reciever: ${balanceOfReciever}\n`)
}

main()