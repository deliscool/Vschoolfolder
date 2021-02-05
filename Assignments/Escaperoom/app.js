const readlineSync = require('readline-sync')

const name = readlineSync.question(' What is your name?');
    console.log('Hello,'+name+'! Lets play in the escape room.')

const start = readlineSync.question('Shall we start? [Y] or [N]: ', {limit: ["y", "n"]});
    if (start == "y"){
     console.log(name + ' has entered the Escape Room.....')
    } 
    else if (start == "n"){
     console.log('Maybe next time we can play. Bye '+name+'!')
            process.exit()
    }

const playerAlive = readlineSync.question(''+name+' in order to escape, try not to die. Please choose from the following options....(hit enter)')
    options = [' open door', ' put hand in hole', ' find key'],
    index = readlineSync.keyInSelect(options);

playerPlaying = true;
while (playerPlaying == true) {

isplayerOptions = true
    while(isplayerOptions == true){
        //while the player  is still active 
    {
        const isPlayerOption1 = readlineSync.question("Are you sure you wanted to ... \n [1] Open the door? \n [2] Put hand in the hole? \n [3] Find key? \n",{limit:["1","2","3"]});
            switch(isPlayerOption1){ 
                case '2':
                    console.log ('You have died 😵!!!...again')
                    isplayerOptions = true;
                    break;
                case '3':
                    console.log ('You found the key 😬!');
                    isplayerOptions = false;
                    break;
                case '1':
                    console.log ('You do not have key 😫, try again');
                    isplayerOptions = true;
                    break;
           }
        }
    }

isplayerOptions = true
    while(isplayerOptions == true){
        // 2nd iteration when player pics case 3 
    {
        const isPlayerOption2 = readlineSync.question("Will you ... \n [1] Open the door? \n [2] Put hand in the hole? \n [3] Find key? \n",{limit:["1","2","3"]});
            switch(isPlayerOption2){ 
                case '2':
                    console.log ('You have died 🥺.... so close!!!')
                    isplayerOptions = true;
                    break;
                case '3':
                    console.log ('You already have the key 😣!');
                    isplayerOptions = true;
                    break;
                case '1':
                    console.log ('You opened the door 🙌!');
                    isplayerOptions = false;
                    break;
           }
        }
    }

const isPlayerOption3 = readlineSync.question("Congrats!!!! Play again? \n [Y]es? \n [N]o? \n",{limit:["y","n"]});
    switch(isPlayerOption3){ 
        case 'y':
            console.log ('Here we go Again !👌')
            playerPlaying = true;
            break;
        case 'n':
            console.log ('Game over! 👊');
            playerPlaying = false;
            break;
}
}
