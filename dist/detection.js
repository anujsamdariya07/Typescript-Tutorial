"use strict";
function detectType(val) {
    if (typeof val === 'string')
        return val.toLowerCase();
    return val + 3;
}
// We want to find id from the DB but there is no id so, null is being returned
function provideId(id) {
    if (!id) {
        console.log('Please provide id...');
        return;
    }
    // DB operations
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// In the following fn, if true -> Fish, false -> Bird
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return 'fish food';
    }
    else {
        pet;
        return 'bird food';
    }
}
function getTrueShape(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    else {
        // return shape.side ** 2;
    }
}
// The never type & Exhaustiveness checking
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.side ** 2;
        case 'rectangle':
            return shape.length * shape.width;
        default:
            const _defaultShape = shape;
            return _defaultShape;
    }
}
