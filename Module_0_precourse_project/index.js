// Web page entrance prompt
var soil =  prompt("What pH level is your soil?");
    if(soil<= 8)
        document.write ("You can plant - vegetables, flowers or fruits");
        else
        document.write ("Your soil is too acidic 🤮");


// "Let's Garden" text function
function myFunction() {
    document.getElementById("demo").style.color = "green";
}

//object 

const plant = {
    type:"Vegetable",
    phPreference:[4.5,5.0,5.5,6.0,6.5,7.0,7.5],
    potentialoutput:["Beans","Carrot","Onion","Potato","Spinach","Tomato"],
}

for (let i = 0; i < 6; i++) {
    console.log(plant.potentialoutput[i])
}

//For Loops - At their most elemetary form they are just creating an number line for us; starting at a number and ending at a number - these number are represented by a single variable, named i
//for (#1 start point; #2 end point; #4 howtogetthere){
//    #3 what to do
//}
//i = i + 1 same i++

const  veg1= {name:"Cucumber",
                phPreference: [5.5, 6.0,7.0],
                experience:"yes",
}

const veg2={ name:"Potato",
                phPreference: [4.5, 5.0, 6.0],
                experience:"no",
}

const vegetable = [veg1,veg2]

for (let i = 0; i < 2; i++) {
    if (vegetable[i].experience === "no") {
    console.log(vegetable[i].experience)
    }
}

var name = "del"
 var boolean = true
var car = {
    type:["awd","front wheel drive","four wheel drive","rear wheel drive"],
    make:"toyota"
}

if (name = "del") {
    console.log("My name is Del")
    }

var drinks = ["Red Bull", "Bang", "Starbucks"]

for (let i = 0; i < 3; i++) {
    console.log(drinks[i])
}