var sum = function(array) {
    return (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
}

//console.log(sum([1,2,3,1,3,5,6]));

/*

A one-liner that meets all your requirements:

var sum = function(array) {
    return (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
}

// or in ES6

var sum = (array) => (array.length === 0) ? 0 : array[0] + sum(array.slice(1));

// Test cases
sum([1,2,3]); // 6

var s = [1,2,3];
sum(s); // 6
sum(s); // 6

Reasoning

    In a recursive call, you need to model your task as reduction to a base case. The simplest base case in this case is the empty array - at that point, your function should return zero.
    What should the reduction step be? Well you can model a sum of an array as the result of adding the first element to the sum of the remainder of the array - at some point, these successive calls will eventually result in a call to sum([]), the answer to which you already know. That is exactly what the code above does.
    array.slice(1) creates a shallow copy of the array starting from the first element onwards, and no mutation ever occurs on the original array. For conciseness, I have used a ternary expression.

Breakdown:

sum([1,2,3])
-> 1 + sum([2,3])
-> 1 + 2 + sum([3])
-> 1 + 2 + 3 + sum([])
-> 1 + 2 + 3 + 0
-> 6

*/

let operations = 0;
function Test(n)
{
    if(n > 0)
    {
        operations+=1;
        console.log(n);
        Test(n-1);
    }
    else
    {
        console.log("Number of operations: " +operations);
        operations = 0;
    }
    
}
Test(5);
Test(10);


let x = 0;
function sumOfArray(N, A)
{
  if(N < 1)
  {
    return x;
  }
  else
  {
    N--;
    x += A[N];
    return sumOfArray(N, A);
  }
}

console.log(sumOfArray(4, [85, 23, 12, 9]));