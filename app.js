/* function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  SAME KEYS AND VALUES */

const createInstructor = (firstName, lastName) => ({firstName,lastName});

/* var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!" 

COMPUTED PROPERTY NAMES*/

let favoriteNumber = 42;
const instructor = {
    firstName : "Colt",
    [favoriteNumber] : "Thats my favorite"
}

/* var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
} 

OBJECT METHODS */

const newInstructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

/*createAnimal function 

Write a function which generates an animal object. The function should accepts 3 arguments:

- species: the species of animal (‘cat’, ‘dog’)
- verb: a string used to name a function (‘bark’, ‘bleet’)
- noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

Use one or more of the object enhancements we’ve covered.*/



const createAnimal = (species, verb, noise) => (
    {
        species, 
        [verb](){
            return noise;
        }
    });

const d = createAnimal("dog", "bark", "Woooof!")
    
const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
    