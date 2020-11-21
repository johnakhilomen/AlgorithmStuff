//let A = [1,2,3,4,5,6]; k =5
//let A = [1,3,2,6,1,2]; k = 3
let A = [8, 10];

function checkDivisibleBy5(A, start, end, k)
{
    let resultArray;
    let i = start;
    let j = end;
    while(i <= j)
    {
        //console.log(A[j]);
        if((A[i] + A[j]) % k == 0) resultArray=`${A[i]}, ${A[j]}`;
        j--;
    }
    return resultArray;
}

let arr = [];
function divisiblesumPairs(A, start, end, k)
{ 
    //console.log(start);
    if(start < end)
    {
        let res = checkDivisibleBy5(A, start, end, k);
        if(res)
        {
            arr.push(res);
        }
        start++;
        divisiblesumPairs(A, start, end, k);
    }
    
}

divisiblesumPairs(A, 0, A.length, 2);
console.log(arr);