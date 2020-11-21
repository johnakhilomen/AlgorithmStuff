
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


let A = [10,16,8,12,15,6,3,9,5];

function swap(a, i, j)
{
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}


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
    if(i < j) 
    {
        swap(a, i, j);
    }
    
    }
    swap(a, start, j);
    return j;
}

function QuickSort(start, end)
{
    //console.log("start:"+start + "end:"+end);
    //We only want to recursively call the function only when start is less than end
    if(start <  end)
    { 
    let partitionIndex = PartitionArrayB(A, start, end);
    //Lets partition from start until the partitionIndex
    QuickSort(start, partitionIndex);
    //Lets partition from partitionIndex+1 until the end
    QuickSort(partitionIndex+1, end);
    }
    
}

//console.log(QuickSort(A, 0, A.length));

PartitionArrayB(A, 0, A.length);
QuickSort(0, A.length);
console.log(A);