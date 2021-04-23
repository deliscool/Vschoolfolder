//Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {  
    return animals;
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//Let's write a shopping list validator that always includes milk. We will check for milk, and add it to our array if it's not there.
function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) {
      return [ 'milk', ...items ];
    }
   
    return items;
  }
  
  console.log(validateShoppingList('oranges', 'bread', 'eggs'));

  //Try to make the following function more ES6xy:
  function product(a, b, c, d, e) {
    const numbers = [a,b,c,d,e];
    
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }