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
console.log()