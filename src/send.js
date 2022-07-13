//import xrpl
const xrpl = require('xrpl')
//import log user func
const logUser = require('./logUser');
//import variables 
const {seed,currency,issuer,sendingAmount,sendingMemo} = require('../config.json')

//credentials if sending wallet from seed
const wallet = xrpl.Wallet.fromSeed(seed)

//memo
const memo = Buffer.from(sendingMemo).toString('hex').toUpperCase()


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Wrap code in an async function so we can use await-------------------------------------------
const send = async (user, counter) => {
                  
// Define the network client--------------------------------------------------------------------
    const client = new xrpl.Client("wss://xrplcluster.com/")
    await client.connect();

// Prepare transaction -------------------------------------------------------
   const prepared = await client.autofill({
      "TransactionType": "Payment",
      "Account": wallet.address,
      "Amount": {
        "currency": currency,
        "issuer": issuer,
        //airdrop amount per user
        "value": sendingAmount
      },
      "Destination": user,
      "Memos": [
        {
          "Memo": {
            "MemoData": memo
          }
      }
  ]
    })
  
       //prepared transaction information
       console.log(counter)
       console.log(`Prepared transaction: ${prepared.Account} is sending ${prepared.Amount.value} of ${prepared.Amount.currency} to ${prepared.Destination} `)
       console.log("Transaction cost:", xrpl.dropsToXrp(prepared.Fee), "XRP")
       const sequence = prepared.Sequence
    



// Sign prepared instructions ------------------------------------------------
    const signed = wallet.sign(prepared)

// Submit signed blob --------------------------------------------------------
    const tx = await client.submitAndWait(signed.tx_blob)

// Check transaction results -------------------------------------------------
  console.log("Transaction result:", tx.result.meta.TransactionResult);
  console.log(`onChain: https://mainnet.xrpl.org/transactions/${signed.hash}`);
  let onChain = `https://mainnet.xrpl.org/transactions/${signed.hash}`;
   

// Log users // catch errors -------------------------------------------------
  logUser(user, tx.result.meta.TransactionResult, sequence, onChain) 
  
client.disconnect()
    
};
    



module.exports = send
