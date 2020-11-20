let A = [7,2,1,8,6,3,5,4];

function swap(a, i, j)
{
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}
function PartitionArray(a, start, end)
{
    let pivotIndex = end - 1;
    let pivot = a[pivotIndex];
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
    //console.log(end);
    //we return the functions
    return QuickSort(partitioned, start, end)
}

console.log(QuickSort(A, 0, A.length));