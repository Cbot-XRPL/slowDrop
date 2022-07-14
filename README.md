
# Node.js slowDrop Tool
An xrpl airdrop tool built with javascript and node.js

Carefully scan your holders and drop tokens to them while logging a on ledger confirmation of each outgoing transaction.

____________________________________________________________________________

## Instructions

#### 1. Download project file.

#### 2. Open in a code editor. 

#### 3. Run "npm install" in a terminal.

#### 4. Go to the config.json file.
##### -add seed of wallet you are sending from
##### -add the currency code and issuing address of token you are sending
##### -add the amount of your tokens you want to require holders to have
##### -add the issuer addresses of the tokens you want to scan for holders
##### -add the holding wallet you want to ingnore 
##### -add the amount you want to send 
##### -add the memo you want on the aridrop tx

#### 5. set test or airdrop
##### At the bottem of the index.js file in the section that cycles the holder list there is two lines test and airdrop. When you run the program it will send a airdrop to you test(ignorewallet) for each holder in your array as a test. For the program to drop to the actual holder list you will need to comment out the test line and un comment the holder like.
 

#### 6. Read all the files notes to learn workings of the program

#### 7. Type "npm start" in the terminal to run the program


____________________________________________________________________________


## Notes

#### 

