let Array = [10,16,8,12,15,6,3,9,5];

// First write the swap function, which is just a helper function to swap values of the array.
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function quicksortLomuto(array, left, right) {
    // left-pointer would be the index of the first element which is 0 and 
    //right-pointer would be the index of the last element which would be (length -1).
    left = left || 0;
    right = right || array.length - 1;

    var pivot = partitionLomuto(array, left, right);

    if (left < pivot - 1) {
        quicksortLomuto(array, left, pivot - 1);
    }

    if (right > pivot) {
        quicksortLomuto(array, pivot - 1, right)
    }

    return array;
}

function partitionLomuto(array, left, right) {
    // Lomuto algorithm always uses the last element, array[right], for the pivot.
    var pivot = right;
    var i = left;

    /*The logic under Lomuto is, we start from the leftmost element and keep track of index of smaller (or equal to) elements as j. While traversing, if we find a smaller element, we swap current element with arr[j]. Otherwise we ignore current element.*/
    for (var j = left; j < right; j++) {
        if (array[j] <= array[pivot]) {
            swap(array, i, j);
            i++
        }
    }
    swap(array, i, j);
    return i;
}


function quicksortHoare(array, left, right) {
    // left-pointer would be the index of the first element which is 0 and 
    //right-pointer would be the index of the last element which would be (length -1).
    left = left || 0;
    right = right || array.length - 1;

    var pivot = partitionHoare(array, left, right);

    if (left < pivot - 1) {
        quicksortHoare(array, left, pivot - 1);
    }

    if (right > pivot) {
        quicksortHoare(array, pivot, right)
    }

    return array;

}

/* Two indices that start at the ends of the array being partitioned, then move toward each other, 
until they detect an inversion: a pair of elements, one greater than the pivot, one smaller, 
that are in the wrong order relative to each other. The inverted elements are then swapped. 
Here the numerical values of left and right is continually getting updated with each inner while loop. But only if the while loop condition gets satisfied. That is, when the while loop condition is unsatisfied, e.g. for the first inner while loop, when array[left] > array[pivot] which means we have found a misplaced pair. 
That is, although the left <= right (which is being made sure by the outer while loop) the actual elements are not sorted. Meaning a left side element is larger in value than the right side element. So, the code execution then jumps out of the inner while loop and goes right in to execute the swap function.
*/
function partitionHoare(array, left, right) {
    var pivot = Math.floor((left + right) / 2);
    //console.log("pivot:"+pivot);
    while (left < right) {
        while (array[left] < array[pivot]) {
            left++
            
        }
        while (array[right] > array[pivot]) {
            right--
            
        }
        console.log("left:"+left)
        console.log("right:"+right)
        if (left <= right) {
            swap(array, left, right);
            left++
            right--
        }
    }
    return left;
}

/*let arr = quicksortLomuto(Array, 0, Array.length - 1);
console.log("Sorted array: ");
console.log(arr);*/

arr = quicksortHoare(Array, 0, Array.length - 1);
console.log("Sorted array: ");
console.log(arr);