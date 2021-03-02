const readlineSync = require('readline-sync');
const chalk = require('chalk');


let gameOver = false;
let hasWon = false;
let playerHealth = 100;
let backpack = [];
let animal = [];


function Animals (animalName, minDamage, maxDamage, HP, item) {
    this.animalName = animalName;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
    this.HP = HP;
    this.item = item;
    this.isDefeated = false;
}


animal.push(new Animals("a team monkeys", 40, 70, 50, "Banana Peel"));
animal.push(new Animals("a Lioness", 60, 90, 70, "Claws"));
animal.push(new Animals("a dart Frog", 70, 90, 90, "Poison Potion"));
animal.push(new Animals("a human tree", 50, 70, 130, "Beating Staff"));

//Game introduction, name and start request

const playerName = readlineSync.question(chalk.yellow(' Welcome to the jungle 🐒! What is your name?'));
    console.log(chalk.green('Hello,'+playerName+'! Lets traverse through the jungle.'))

const start = readlineSync.question('Shall we start? [Y] or [N]: ', {limit: ["Y", "N"]});
    if (start == "y"){
     console.log(chalk.green(playerName + ' is journeying through the jungle.....'))
    } 
    else if (start == "n"){
     console.log('Maybe next time we can play. Bye '+playerName+'!')
            process.exit()
    }



const playerAlive = readlineSync.question(chalk.yellow(''+playerName+', try not to die in jungle. Please choose from the following options....(hit enter)'))


playerPlaying = true;
while (playerPlaying == true) {

isplayerOptions = true
    while(isplayerOptions == true){
        //while the player  is still active 
    {
        const isPlayerOption1 = readlineSync.question(chalk.green(''+playerName+' here are your key tools 🎒 \n [W]alk  \n [P]rint status  \n [Q]uit ', {limit:["w","p","q"]}));
            switch (isPlayerOption1){ 
                case 'q':
                    console.log (chalk.red('You have Quit 😵!!!...'))
                    isplayerOptions = false;
                    gameOver = true;
                    break;
                case 'p':
                    console.log (chalk.blue(''+playerName+' has ' + playerHealth + ' HP, and the following items: ' + backpack));
                    isplayerOptions = false;
                    break;
                case 'w':
                    console.log (chalk.green(''+playerHealth+' is walking '));
                    explore()
                    break;
           }
        }

        function explore() {
            let num = Math.floor(Math.random()*4)
            if (num === 3) {
                battle()
            } else {
                console.log(chalk.yellow("Walking..."))
            }
        }
        function animalSelector() {
            let randomAnimal = animal[Math.floor(Math.random()*animal.length)];
            return randomAnimal
        
        }
        function battle () {
            const currentAnimal = animalSelector()
            console.log(chalk.red('You are being chased by ' + currentAnimal.animalName + '!'))
            readlineSync.setDefaultOptions({limit: ['f', 'r', 'q']})  
            let runFight = readlineSync.question('Are you going to Fight (f) or Run (r)? Press q to quit. ')
            if (runFight === 'q') {
                quit()
            } else if (runFight === 'f') {
                fight(currentAnimal)
            } else if (runFight === 'r') {
                run()
            }
        }
        function fight(obj) {
            let attack = Math.floor(Math.random() * (obj.maxDamage - obj.minDamage)) + obj.minDamage;
            let animalAttack = Math.floor(Math.random()* (obj.maxDamage - obj.minDamage));
            while (playerHealth > 0 && obj.HP > 0) {
                let runFight = readlineSync.keyIn('Attack! Are you going to fight (f) or Run (r)? ', {limit: 'fr'})  
                if (runFight === 'f') {
                    console.log(chalk.blue('You are fighting back! '));
                    obj.HP = obj.HP - attack
                    console.log('You dealt ' + attack + ' points of damage! ' + obj.animalName + ' currently has ' + obj.HP+ ' health points left.')
                    userHealth = playerHealth - animalAttack 
                    console.log(chalk.red('Watch out for an attack! Oh no- ' + obj.enemyName + ' dealt ' + animalAttack + ' points of damage to you! You currently have ' + playerHealth + ' health points left.'))
                    if (obj.HP <= 0) {
                        backpack.push(obj.item)
                        console.log(chalk.blue('You defeated ' + obj.animalName + '. Take a look at your inventory to see the new item added! '))
                        console.log(backpack)
                        console.log('Let\'s continue on traversing through the jungle')
                        animal.splice(animal.findIndex(animal => animal.animalName === obj.animalName), 1)        
                    } 
                    if (playerHealth <= 0) {
                        console.log(chalk.red('You have have been eaten by the animal'))
                        gameOver = true
                    }
                    if (animal.length === 0) {
                        hasWon = true;
                        console.log(chalk.green('You traveled safely across the jungle! Conrats!'))
                        console.log('GAME OVER')
                    }
                } else if (runFight === 'r') {
                    playerHealth = 0
                    gameOver = true
                    console.log(chalk.red('You have tried to run, but you tripped and got eaten'))
                }
            }
        }
        function run() {
            let escape = Math.floor(Math.random()*2)
            const currentAnimal = enemyAnimal()
            if (escape === 1) {
                console.log(chalk.blue('You got away! Continute walking '))
            } else {
                console.log(chalk.red(`Oh no,${playerName}, the animal is faster than you. They are hungry! Will you fight them off?`))
                fight(currentAnimal)
            }   


    }


const isPlayerOption3 = readlineSync.question("Play again? \n [Y]es? \n [N]o? \n",{limit:["y","n"]});
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
}
