//import xrpl
const xrpl = require('xrpl');
//import module2
const send = require('./send')

      

//signal issure check 1 is done
let run1 = false;

//start holder array
holders = [];

//count outputs
let counter = 0;

//use this for test sending tokens to self instead of holder list
let test = 'your own address';

// Wrap code in an async function so we can use await-------------------------------------------
           async function main() {
                             
// Define the network client--------------------------------------------------------------------
           const client = new xrpl.Client("wss://xrplcluster.com/")
           await client.connect()
                             
// Custom code goes here-------------------------------------------------------------------

 //2/ xrpl request issuer trustlines -------------------------------------------------------------------     
           const response1 = await client.request({
               "id": 2,
               "command": "account_lines",
               // imput the issuer your want to check for trustlines // use collection issuer for xls14 nfts
               "account": 'your issuing address here',
               "ledger_index": "validated"
             })
               //filter trust lines
               response1.result.lines.forEach((line) =>{
                // instead of 0 put in the number of tokens you want to require user to have
                if (line.balance * -1 > 0 ){
                   //exclude your holding wallet
                    if (line.account != 'your holding wallat here'){
                   //builds holder list
                    holders.push(line.account) 
                    
                    }   
                }
               },run1 = true
             )
 
           
             
  //2/ check a diff issuer and add to holder list-------------------------------------------------------------------
           //un comment this code if you want check more than one issuer. Most like used for xls14 nfts
              /*      if(run1){
             const response2 = await client.request({
                "id": 2,
                "command": "account_lines",
                // imput the issuer 2 your want to check for trustlines
                "account": 'rBj9Q1WWd4Zu4NbUn5y6Qt4PGuPertpoBm',
                "ledger_index": "validated"
              })
            
              response2.result.lines.forEach( line =>{
                 if (line.balance * -1 > 0 ){
                     if (line.account != 'rBqsTsJA1gvaaL78oTkcqQincJ9DQ8F4Xq'){
                     holders.push(line.account);
                    
                     }
                 } 
              })   
            } */
                 
  //2/ cycle holder list send tokens and log data-------------------------------------------------------------------
            holders.reduce(async(memo, holder) =>{
              await memo;
              counter ++;
            //switch the test line in for holder line to send tokens to your self for each holder to test code before sending to holders
              //await send(test, counter);
              await send(holder, counter);
              },undefined)

           client.disconnect()
                             
            }; 
           
          
          
           main()
             

         
