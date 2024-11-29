// const tinderUser = new Object() // singleton object
const tinderUser = {} // non-singleton object
// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Kanav"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
  email: "kumarkanav5753@gmail.com",
  fullname: {
    userfullname: {
      firstname: "kanav",
      lastname: "kumar"
    }
  }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b"
}

const obj2 = {
  3: "a",
  4: "b"
}

const obj4 = {
  5: "a",
  6: "b"
}

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// spreading
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "example0@gmail.com"
  },
  {
    id: 2,
    email: "example1@gmail.com"
  },
  {
    id: 3,
    email: "example2@gmail.com"
  },
  {
    id: 4,
    email: "example3@gmail.com"
  }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// console.log(tinderUser.hasOwnProperty("isLogged"));


const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "kanav"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

// {
//   "name": "Kanav",
//   "coursename": "js in hindi",
//   "price": "free"
// }

[
  {},
  {},
  {}
]
