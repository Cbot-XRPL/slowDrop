
//import module
const xrpl = require('xrpl');
const send = require('./send')
const fs = require('fs');
//import var
const {ignoreWallet} = require('../config.json')  

//start holder array
let counter = 0;

let test = {account:ignoreWallet}


const main = async(test)=>{
fs.readFile('../airdrop-list.json', 'utf8', async (err, data) => {

  if (err) {
      console.log(`Error reading file from disk: ${err}`);
  } else {
      // parse JSON database to javascript object
      const database = await JSON.parse(data);
 
      
    database.reduce(async(memo, holder) =>{
        await memo;
        counter ++;


        
//3/holder list---------------------------------
//console.log(holder.address, `counter :${counter}`)

//3/test---------------------------------

//console.log(holder.account, `counter :${counter}`)
//await send(test, counter);

//3/airdrop-------------------------------
await send(holder, counter);

},undefined) 

}

})
}

main(test)








