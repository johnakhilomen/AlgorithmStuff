//Linear search
/*
The best-case time complexity is O(1), when the value is at the start of the array. 
The worst case is O(n), as you have to search through the entire array to find that 
a key doesn't exist. And the average case is also O(n), which would take place when 
the item you are looking for is in the center of the array.
*/
let tick =  1;
function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        tick++;
        if (array[i] == value) {
            return {result: i, tick: tick};
        }
    }
    return -1;
};

console.log(indexOf([2,3,1,4,3,5,6,8,9,10,98,122,111,190,476,90,92,99,10], 99));


let operationBinarySearch = 0;
function binarySearch(array, value, start, end) {
   //Lets  stop execution if  
   console.log(start, end)
   if(start == (end-1))
   {
    //console.log("ENDED!");
    operationBinarySearch++;
    console.log("Number of operations: " +operationBinarySearch);
    return -1;
   }
    //sort the array in ascending order first
    array.sort((a, b)=> a - b);
    let  middlePoint = Math.floor((start + end) / 2);
    console.log("middlePoint:" + middlePoint);
   //Lets check if the value we're looking for is in the middlePoint index
   if (value == array[middlePoint])
   {
       //console.log("final middlePoint:" + middlePoint);
       //console.log("value:" +array[middlePoint]);
       operationBinarySearch++;
       console.log("Number of operations: " +operationBinarySearch);
       return middlePoint;
   }
   //if it's from the middle to the left
   else if(value < array[middlePoint])
   {
       //console.log("value is less");
       operationBinarySearch++;
       return binarySearch(array, value, 0, middlePoint);
   }
   //if it's from the middle to the left
   else if(value > array[middlePoint])
   {
       //console.log("value is greater");
       operationBinarySearch++
       return binarySearch(array, value, middlePoint, end);
   }
  
};

/*[
    1,   2,   3,  4,  5,  6,   8,
    9,  10,  90, 92, 98, 99, 111,
  122, 190, 476
]*/
//console.log([2,3,1,4,3,5,6,8,9,10,98,122,111,190,476,90,92,99,10].sort((a,b)=>a-b));
//console.log([2,3,1,4,3,5,6,8,9,10,98,122,111,190,476,90,92,99,10].sort((a, b)=> b - a));
const arr = [2,3,1,4,5,6,8,9,10,98,122,111,190,476,90,92,99];
console.log(binarySearch(arr, 4, 0, arr.length));