function palindromeString(str)
{
    let tokenized1 = "";
    let tokenized2 = "";
    for(let i = 0; i < str.length; i++)
    {
        tokenized1 += str[i].toLowerCase()
    }
    for(let i = str.length -1; i >= 0; i--)
    {
        tokenized2 += str[i].toLowerCase()
    }
    //console.log(tokenized1, tokenized2)
    return (tokenized1 === tokenized2) ? true : false;
}

console.log(palindromeString("Eve"))
console.log(palindromeString("Adam"))
console.log([...new Set([1,1,2,2,1,1,3,4])])

const y = [ { '1': 1 }, { '5': 3 }, { '4': 3 }, { '3': 1 } ];
y.sort(function(a, b) {
    return b[`${Object.keys(b)[0]}`] - a[`${Object.keys(a)[0]}`];
  });

const newA = [y[0], y[1]];
console.log(newA[0][`${Object.keys(newA[0])[0]}`] === newA[1][`${Object.keys(newA[1])[0]}`])

