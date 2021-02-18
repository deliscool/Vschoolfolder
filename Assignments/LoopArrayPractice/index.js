//* #1 Loop through the following array and count how 
//* many "computers" there are. Log the final count:
//*var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

//*console.log(officeItems.length)
//Should be 10

//** #2 Loop through the following array and log to the console 
//** "old enough" if they are 18 or older, and "not old enough" if thy aren't 18. 

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

peopleWhoWantToSeeMadMaxFuryRoad.forEach(myFunction)

function myFunction (item, index) {

} 
function outPutMoviePref(item) {
    if(age < 18)
        consolelog(item.name + "is old enough to watch.")
    }else {
        consolelog(item.name + "is not old enough to watch.")
    }
}

  for(var i = 0 ; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age = i > 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to watch.")
    }
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age = i < 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to watch.")
    }
}

//* Things to note template literal (`${}`) syntax