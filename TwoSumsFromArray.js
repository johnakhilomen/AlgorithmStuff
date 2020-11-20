let A = [1,2,3,4,5,6,7,8,9,10];

function splitSum(a, start, end)
{
    let B = 0;
    let C = 0;
    let tick = 0;
    let pivot = Math.abs(start + end)/2;
    for (let i = start; i < pivot; i++)
    {
        tick++;
        B += a[i];
    }
    console.log("First Loop : "+ tick);
    for (let j = (end-1); j >= pivot; j--)
    {
        C += a[j];
    }
    a.splice(pivot, 0, B);
    a.splice(end+1, 0, C);
    return a;
}

console.log(splitSum(A, 0, A.length));