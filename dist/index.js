"use strict";
// class User {
//   email: string;
//   name: string;
//   readonly city: string = 'Jabalpur';
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// class User {
//   public email: string; // All the values which are not marked private are treated as public by default
//   // private name: string;
//   private name: string;
//   readonly city: string = 'Jabalpur';
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = 'Jabalpur';
    }
    deleteToken() {
        console.log('Token Deleted!');
    }
    get getAppleEmail() {
        return `apple${this.email}...`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set setCourseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const anuj = new User('a@a.com', 'anuj');
// anuj.city = 'Delhi'
anuj.name;
// anuj.deleteToken;
