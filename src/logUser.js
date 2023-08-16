//log users

const fs = require('fs');

        


const logUser = (user,result,sequence, onChain) => {

  // read the database file
  fs.readFile('../users.json', 'utf8', (err, data) => {

    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {
        // parse JSON database to javascript object
        const database = JSON.parse(data);
    
        

         
           // adds a new record to database file
           database.push({
            user: user,
            result: result,
            sequence: sequence,
            onChain: onChain
            
            })
            
                
             

            // write data back to the file in json
            fs.writeFile('../users.json', JSON.stringify(database, null, 4), (err) => {
                console.log(`Logged to user.json : ${user}`);
            if (err) {
                console.log(`Error writing file: ${err}`);
            }
           });
        
    }

    });

}


module.exports = logUser;