Logical OR(||) Operator
This operator will return the first true value. So, it won’t even reach the rest of the conditions and return true as the condition is satisfied.

true || false
// true
So how can we use this?
Let’s take an example

var x;
var y = 'Gurseerat';
var z = 'This will not evaluate';
var name = x || y || z;
console.log(name);
// Gurseerat
Here, since x is undefined, the condition will go on to check y next and store its value in name as it’s a truthy value.

Logical AND(&&) Operator
false && true
// false
This operator will return false as soon as it gets any falsy value and will return the last true value if all the values are truthy.

So how can we use this?
Let’s take an example

var age =  25;
function driveCar() {
  return 'Driving Car';
}
var result = age > 18 && driveCar();
console.log(result);
// Driving Car
Here, since age satisfies the condition, the next condition will be checked and the last truthy value is printed.

Let’s take another example,

var age = 25;
// Using if condition
if (age > 18) {
  action = "Drive Car";
} else {
  action= "Can't Drive Car";
}
console.log(action) // Drive Car
// Short-circuiting
greeting = (age > 18 && "Drive Car") || "Can't Drive Car";
console.log(greeting) // Drive Car
In the above example, since the condition has received all truthy values in the AND condition, the rest of the statement is ignored and the last truthy value in AND condition is returned. You can create chains of conditions this way and shorten the length of your code.