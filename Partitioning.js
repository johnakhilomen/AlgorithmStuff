let A = [10,16,8,12,15,6,3,9,5];

function swap(a, i, j)
{
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}
function PartitionArray(a, start, end)
{
    //We take the last element in the array as pivot and store its index
    let pivotIndex = end - 1;
    //Lets grab the pivot 
    let pivot = a[pivotIndex];
    //let i start at start - 1 
    let i = start - 1;
    for (let j = start; j < pivotIndex; j++)
    {
        if(a[j] < pivot)
        {
            i++;
            swap(a, i, j);
        }
    }
    swap(a, (i+1), pivotIndex);
    return a;
}

function QuickSort(a, start, end)
{
    //console.log(end);
    //Lets first partition the array the first time which will use the last index for pivot (8)
    let partitioned = PartitionArray(a, start, end);
    //Lets decrement by 1 so that we can recursively select a new pivot as the last index
    end--;
    //if end has decremented until start
    if(end == start)
    {
        //Then we return the partitioned array
        return partitioned;
    }
    //we return the functions
    return QuickSort(partitioned, start, end)
   
}

//console.log(QuickSort(A, 0, A.length));

function PartitionArrayB(a, start, end)
{
    let pivotIndex = start;
    let pivot = a[pivotIndex];
    let i = pivotIndex;
    let j = end;
    while (i < j)
    {
        //Lets increment i after pivot until we find an item less than pivot
    do 
    {
        i++;
        //console.log(a[i]); 
    }
    while (a[i] < pivot);
    do 
    {
        j--;
        //console.log(a[j]); 
    }
    while (a[j] > pivot);
    if(i < j) swap(a, i, j);
    
    }
    
    return a;
}
console.log(PartitionArrayB(A, 0, A.length));