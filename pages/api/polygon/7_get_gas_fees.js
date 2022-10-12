const { ethers } = require("ethers");

const INFURA_ID = 'bc694a63cddd4233a0dc6b512f87fd6e'
const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mainnet.infura.io/v3/${INFURA_ID}`)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
    "function gasPrice() view returns (string)",
];

const address = '0x40763DF31955CB3Bad544Cbed3E1953a9B063311' // DINT Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const gasPrice  = await contract.gasPrice()
    console.log("gasPrice:", gasPrice)
  
}

main()