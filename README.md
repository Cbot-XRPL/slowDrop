
# Node.js slowDrop Tool
An xrpl airdrop tool built with javascript and node.js

 This tool carefully scan your holders and drop tokens to them while logging a on ledger confirmation of each outgoing transaction.

____________________________________________________________________________

## Instructions

### 1. Download project file.

### 2. Open in a code editor. 

### 3. Run "npm install" in a terminal.

### 4. Go to the config.json file.
- add seed of wallet you are sending from
- add the currency code and issuing address of token you are sending
- add the amount of your tokens you want to require holders to have
- add the issuer addresses of the tokens or xls14 nfts you want to scan for holders
- add the 2ed issuer addresses of the tokens or xls14 nfts you want to scan for holders (2ed issuer is for nfts mostly)
- add the holding wallet you want to ingnore FYI this doubles as test wallet to send practice drops to
- add the amount you want to send 
- add the memo you want on the aridrop tx

### 5. set test or airdrop (use index.js for tokens -- index1.js for nfts -- index2.js for drops to custom user list)
At the bottem of the index.js file in the section that cycles the holder list there is two lines test and airdrop. When you run the program it will console log the holders addresses and it will send a airdrop to your test(ignorewallet) for each holder in your holder array as a test. For the program to drop to the actual holder list you will need to comment out the test lines and un comment the airdrop line.

### 6. For custom drop list use the airdrop list json file to add your users to drop to

### 7. Read all the files notes to learn workings of the program

### 8. In console type "npm start" to run program for token holder scan and drop -- "npm run custom" for token drop to custom user list -- "npm run xls14" to scan for xls-14 (old style nfts) and send tokens


____________________________________________________________________________


## Notes

#### 

