const arr = [1, 2, 1, 3, 4, 4, 5, 6, 7, 7, 8, 9];

function removeduplicatedArray(A) {
  let result = [];
  if (A.length == 0) return "Null array";
  for (let i = 0; i < A.length; i++) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      //   if (A[i] === A[j]) {
      //     count++;
      //   } OR
      count += (A[i] === A[j] && 1) + 0;
    }
    if (count === 1) {
      result.push(A[i]);
    }
  }
  return result;
}

console.log(removeduplicatedArray(arr));

// console.log((4 === 4 && 1) + 0);
// console.log((4 === 5 && 1) + 0);

function removeduplicatedArray_(A) {
  let result = {};
  if (A.length == 0) return "Null array";
  for (let i = 0; i < A.length; i++) {
    // if (!result[A[i]]) {
    //   result[A[i]] = 0;
    // }
    // result[A[i]] += 1;
    // OR
    /*
    if "(result[A[i]])" condition is not met then it continues to set result[A[i]] = 0 (|| 0 syntax)
    But if result[A[i]] is defined and has it's default value 0, then we can continue
    adding 1 to it (+1)
    */
    result[A[i]] = (result[A[i]] || 0) + 1;
  }
  return result;
}

const obj = removeduplicatedArray_(arr);
console.log(obj);
// for (let i in obj) {
//   if (obj[i] == 1) {
//     console.log(i);
//   }
// }
