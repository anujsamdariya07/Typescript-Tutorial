"use strict";
const score = [];
const names = [];
function identityOne(arg) {
    return arg;
}
function identityTwo(arg) {
    return arg;
}
function identityThree(arg) {
    return arg;
}
// identityThree(true)
function identityFour(arg) {
    return arg;
}
identityFour({ brand: 'Milton', type: 2 });
// For arrays
function getSearchProducts(arg) {
    console.log(arg.length);
    // Do some db operations
    const myIndex = 3;
    // return arg.length; -> error
    return arg[myIndex];
}
const getMoreSearchProducts = (arg) => {
    // Do some db operations
    const myIndex = 4;
    return arg[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
// Above function is similar to the following function
// function anotherFunction<T, Database>(valOne: T, valTwo: Database): object {
//   return {
//     valOne,
//     valTwo,
//   };
// }
anotherFunction(1, {
    connection: 'a',
    username: 'anuuj',
    password: 'a',
});
// Generic class
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
