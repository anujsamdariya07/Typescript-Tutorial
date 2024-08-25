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
  protected _courseCount = 1;
  readonly city: string = 'Jabalpur';
  constructor(
    public email: string,
    public name: string
  ) // private userId: string
  {}

  private deleteToken() {
    console.log('Token Deleted!')
  }

  get getAppleEmail(): string {
    return `apple${this.email}...`;
  }

  get getCourseCount(): number {
    return this._courseCount;
  }

  set setCourseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error('Course count should be more than 1')
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount () {
    this._courseCount = 4;
  }
}

const anuj = new User('a@a.com', 'anuj');
// anuj.city = 'Delhi'
anuj.name;
// anuj.deleteToken;
