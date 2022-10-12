const { ethers } = require("ethers");

const INFURA_ID = 'bc694a63cddd4233a0dc6b512f87fd6e'
const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mainnet.infura.io/v3/${INFURA_ID}`)

const account1 = '0xcF0C304fd08dB5F832b00e0793F6340B3112fC1a' // Your account address 1
const account2 = '0x2170c47b9026Feaaa01Bc085ce4a3d85E2E43085' // Your account address 2

const privateKey1 = '2e5f27b8159946f97ebc735d19d8d4dd9a2fb24c3bbe58c92c587d34bb93cb6d' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)




const main = async () => {
    const senderBalanceBefore = await provider.getBalance(account1)
    const recieverBalanceBefore = await provider.getBalance(account2)
    const gasPrice = await provider.getGasPrice()

    // get max fees from gas station
let maxFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
let maxPriorityFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei

try {
    const { data } = await axios({
        method: 'get',
        url: isProd
        ? 'https://gasstation-mainnet.matic.network/v2'
        : 'https://gasstation-mumbai.matic.today/v2',
    })
    maxFeePerGas = ethers.utils.parseUnits(
        Math.ceil(data.fast.maxFee) + '',
        'gwei'
    )
    maxPriorityFeePerGas = ethers.utils.parseUnits(
        Math.ceil(data.fast.maxPriorityFee) + '',
        'gwei'
    )
} catch {
    // ignore
}


    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

    const tx = await contractWithWallet.transfer(account2, balance)
    await tx.wait()
    console.log(tx)

    const senderBalanceAfter = await provider.getBalance(account1)
    const recieverBalanceAfter = await provider.getBalance(account2)

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
}

main()