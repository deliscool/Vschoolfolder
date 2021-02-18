//* for each 

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

  function myFunction(item, index) {
    let isOlderThanEighteen  = (item.age > 18);
    let isMale =  (item.gender === "male");
  
    let fragmentOne = item.name + " is "+ (isOlderThanEighteen ? "": "not") +" old enough" + (isOlderThanEighteen? "" : " to see Max Fury Road"); 
    let genderPronoun = (isMale  ? "HIM" : "HER");
    let genederAdjective = (isMale  ? "HE'S" : "SHE'S");
  
    let fragmentTwo = + isOlderThanEighteen ? ". " + genederAdjective + " good to see Mad Max Fury Road." : ", dont't let " + genderPronoun + " in."
    
    console.log(fragmentOne + fragmentTwo);
  }



// kk extra credit 
//esentially we are implementing a call back
//which is a function passing to a function
//Ternary 

//Prototype
//Array are iterable objects 
//** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach */
//** ternary operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator */