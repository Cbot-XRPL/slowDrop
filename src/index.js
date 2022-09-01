//IMPORT XRPL MODULE BY  npm install xrpl -----------------------------------------------------------------------
const xrpl = require('xrpl'); 
//IMPORT ISSUER AND AMOUNT OF TOKENS TO CHECK FOR -----------------------------------------------------------------------
const {requiredHoldings,checkIssuer1,checkIssuer2,ignoreWallet} = require('../config.json')  
//import module2
const send = require('./send')



//line counter
let counter = 0;
//log counter
let logCounter = 0;
//holder counter
holders = [];
//test account
let test = ignoreWallet;





//run primary token search and return page marker
const getMarker = async (marker) => {
    // establish new connection
    const client = new xrpl.Client('wss://xrplcluster.com/');
    await client.connect();

    const requestBody = {
        id: 2,
        command: 'account_lines',
        //issuing account of the project -----------------------------------------------------------------------
        account: checkIssuer1,
        ledger_index: 'validated',
    };

    // add marker to the request obj
    if (marker) requestBody.marker = marker;

    // make request
    const response = await client.request(requestBody);

    // do some logic with response
    response.result.lines.forEach((line) => {
                      //how many tokens each wallet has -----------------------------------------------------------------------
        if (line.balance * -1 >= requiredHoldings) {
            
            if (line.account != ignoreWallet){
                //builds holder list
                logCounter++
                console.log(`holder ${logCounter} pushed to array`);
                 holders.push(line) 
                 }   
           
        }
    });

    // disconnect
    client.disconnect();

// this returns next page marker
    return response.result.marker;
};



//Define recursive function which calls itself if a page marker exists
const recursive = async ( marker) => {
    if (marker) {
        getMarker(marker)
        .then(async (nextMarker) => {
        recursive( await nextMarker);
        })
        .catch((error) => console.log(error));
    }else{
     console.log('done making array')



//2/ cycle holder list send tokens and log data-------------------------------------------------------------------
holders.reduce(async(memo, holder) =>{
    await memo;
    counter ++;
    

//3/holder list---------------------------------
         //console.log(holder, counter)
//3/test---------------------------------
        await send(test, counter);
//3/airdrop-------------------------------
         //await send(holder, counter);

    },undefined)




    }
};



// call get marker with null then run recursive that stops when it runs out of pages
getMarker().then(async(nextMarker)=>{
await recursive(nextMarker)
})


 




