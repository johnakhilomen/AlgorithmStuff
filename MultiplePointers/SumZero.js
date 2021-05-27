//Multiplepointers is when two array indices are moving in opposite direction
//Find any pair in the array whose sum equals num
function sumZero(array, num)
{
    let results = [];
    // left starts on the first index where 
    // right starts on the last index in the array
    let left = 0, right = array.length - 1;
    while(left < right)
    {
        //Get the sum of array of left and array of right
        let sum = array[left] + array[right];
        // console.log(left, right, sum);
        // If the sum is the num we're looking for
        if ( sum === num) 
        {
            //Lets push both items into our results array
            results.push(array[left]);
            results.push(array[right]);
        }
        //decrement the right array
        right--;
        //We increment the left array
        left++;
    }
    return results;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3], 0))