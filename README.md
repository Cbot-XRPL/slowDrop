
# Node.js airDrop
an xrpl airdrop tool built with javascript and node.js

____________________________________________________________________________

## Instructions

1. Download project file.

2. Open in a code editor. 

3. Run "npm install" in terminal.

4. Go to the config.json file.
-add seed of wallet you are sending from
-add the currency code and issuing address of token you are sending
-add the amount of your tokens you want to require holders to have
-add the issuer addresses of the tokens you want to scan for holders
-add the holding wallet you want to ingnore 
-add the amount you want to send 
-add the memo you want on the aridrop tx

5. at the bottem of the index.js file in the section that cycles the holder list there is commented out line look like this...
  //test----------------
        await send(test, counter);
  //airdrop-------------
      //await send(holder, counter);
   when you run the program it will send a airdrop to you test(ignorewallet) for each holder in your array as a test.
   For the program to drop to the actual holder list you will need to comment out the test line and un comment the holder like.
 

6. Read all the files notes to learn workings of the program

7. to run the program type "npm start" in the terminal






