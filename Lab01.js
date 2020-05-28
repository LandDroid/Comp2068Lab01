console.clear();
/*
  Full Name: Landon Lyle
  Student ID: 200421088

  Instructions:
    Follow the steps below. If you have any questions
    please feel free to use Slack to communicate. You
    are allowed to discuss the lab with other students
    but you ARE NOT permitted to copy/paste or share
    code.
  
  Rubric:
    Steps: 11.5 points
    Code Format: 10 points
    Github Link: 10 points

  NOTE: The code format and Github link marks are
    only awarded if the steps have been completed.
    (Code formatting is the visual structure of
      you code. I expect that you have used proper
      tabbing of nested structures so code readability
      is adequate.)
*/

/*
  Step 1 (2.5 points):
    Create an array that contains 4 people objects.
    Each object must have at least 2 properties.
*/

console.log("Step 1");
// Array of people objects
console.log("My Array of people objects");
const people =[
                {name: "Landon", age: 38},
                {name: "Keshia", age: 10},
                {name: "Aaliyah", age: 13},
                {name: "Felicity", age: 4},
                {name: "Melissa", age: 38}
              ];
//Printing out array.              
console.log(people);

/*
  Step 2 (6 points):
    Create an arrow function that accepts
    a destructured object as an argument. In the
    body of your function, console.log a string
    template utilizing the properties you
    destructured.
*/

console.log("Step 2");
console.log("My deconstructed arrow function");
const DestructedArrowFunc = people => {
  console.log(people);
};
DestructedArrowFunc(people);

/*
  Step 3 (3 points):
    Loop over your array using a for/of loop.
    Call your arrow function passing the array item
    as an argument.
*/
console.log("Step 3");
// Looped array function
console.log("My for loop array function");
const myForLoopFunc = () => {
  for (let key in people) {
    console.log(key);
    console.log(people[key]);
  }
};
myForLoopFunc();