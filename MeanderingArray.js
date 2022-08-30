/* 

Given an array of integers, the task is to print the array in the order – smallest number, the Largest number, 2nd smallest number, 2nd largest number, 3rd smallest number, 3rd largest number, and so on…..

Examples:  

Input : arr[] = [5, 8, 1, 4, 2, 9, 3, 7, 6]
Output :arr[] = {1, 9, 2, 8, 3, 7, 4, 6, 5}

Input : arr[] = [1, 2, 3, 4]
Output :arr[] = {1, 4, 2, 3}

*/

let unsortedArr = [1, 5, 8, 7, 6, -1, -5, 4, 9, 5];

let output = [];

function meanderArray(unsorted) {
  let sorted = unsorted.sort((a, b) => b - a);
  let output = [];

  for (let i = 0; i < sorted.length / 2; i++) {
    output.push(sorted[i]);
    if (i !== sorted.length - 1 - i) {
      output.push(sorted[sorted.length - 1 - i]);
    }
  }
  return output;
}
let result = meanderArray(unsortedArr);
console.log(result);
