//[8, 2, 9, 1] => [1, 2, 8, 9]
//
//We'll start to loop from the 1st index of the array until the array.length
//Create a variale to hold the current value
//Create another variable to hold the index of the value before the current value
let array = [8, 2, 9, 1];
for(let i = 1; i < array.length; i++)
{
    console.log("i:" +i);
    let current = array[i];
    let indexOfValueBeforeCurrentValue = i-1;
    while(indexOfValueBeforeCurrentValue >= 0 && array[indexOfValueBeforeCurrentValue] > current )
    {
        console.log("indexOfValueBeforeCurrentValue:" +indexOfValueBeforeCurrentValue);
        array[indexOfValueBeforeCurrentValue+1] = array[indexOfValueBeforeCurrentValue];
        indexOfValueBeforeCurrentValue--;
    }
    array[indexOfValueBeforeCurrentValue + 1] = current;
   
}
console.log(array);