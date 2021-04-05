// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not the data type number:

function sum(x,y) {
    try {
        if (typeOf x !== `number`) {
            throw `x is not a number`;
        } else if (typeOf y !== `number`) {
            throw `x is not a number`;
        }
    } catch.(err) {
        console.log(err);
    }
    console.log(x+y);
}