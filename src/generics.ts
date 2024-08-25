const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(arg: number | boolean): number | boolean {
  return arg;
}

function identityTwo(arg: any): any {
  return arg;
}

function identityThree<Type>(arg: Type): Type {
  return arg;
}

// identityThree(true)

function identityFour<T>(arg: T): T {
  return arg;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({brand: 'Milton', type: 2})

// For arrays

function getSearchProducts<T>(arg: T[]): T {
  console.log(arg.length);
  // Do some db operations
  const myIndex = 3
  // return arg.length; -> error
  return arg[myIndex];
}

const getMoreSearchProducts = <T,> (arg: T[]): T => {
  // Do some db operations
  const myIndex = 4;
  return arg[myIndex];
}
// <T,> here ',' is used to mention that it is not a jsx syntax instead it is a syntactical sugar of generics

// Using type parameters as generic constraints

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
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

// Using class types in generic

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

// Generic class
class Sellable<T> {
  public cart: T[] = []
  addToCart(product: T) {
    this.cart.push(product);
  }
}
