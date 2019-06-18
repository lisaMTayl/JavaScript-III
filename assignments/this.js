/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
// The keyword this always tried to bind to the window, meaning that by default it points to the big picture unless you specify a specific view.
// code example for Window Binding
console.log(this); // tries to console.log the entire window;


// Principle 2
// Implicit binding in objects and methods basically ties the keyword this to the object or method on the left side of the dot.
// code example for Implicit Binding
const dog = {
    name: "Daisy",
    age: 7,
    speak: function() {
        return `${this.name} says "Arf!"`;
    }
};
console.log(dog.speak());
// Principle 3
// New binding occurs when you use a constructor function.  It binds the this keyword to the specific instance that you've created.
// code example for New Binding
function IrritatedPerson(spouse) {
    this.house = "messy";
    this.food = "burnt";
    this.spouse = spouse;
    this.paycheck = function() {
        console.log(`${this.spouse} spent your paycheck.`);
    };
}

const John = new IrritatedPerson("Lisa");
console.log(John.paycheck());
// Principle 4
//Binding is considered explicit when this keyword is tied to an instance using the .call or .apply methods. These methods overide the implicit binding set by the constructor functions.
// code example for Explicit Binding
John.paycheck.call("Lisa");