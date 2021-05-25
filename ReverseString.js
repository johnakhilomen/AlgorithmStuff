function reverseString(str)
{
    const regex = /[\s,]+/;
    let result = "";
    const tokenized = str.split(regex)
    for (let i = (tokenized.length -1); i >= 0; i--)
    {
        result += tokenized[i] +" ";
    }
    return result;
}

console.log(reverseString("The man is coming"))

function reverseString_solution2(str)
{
    const regex = /[\s,]+/;
    return str.split(regex).reverse(regex).join()
}
console.log(reverseString_solution2("The man is coming"))