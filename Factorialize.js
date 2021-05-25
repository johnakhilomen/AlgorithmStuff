function Factorialize(number)
{
    let result = 1;
    for (let i = number; i > 0; i--)
    {
        result *= i;
    }
    return result;
}

console.log(Factorialize(5));

function Factorialize_recursive(number)
{
    if(number === 0)
    {
        return 1;
    }
    //result = number * Factorialize_recursive(number)
    return number * Factorialize_recursive(number - 1);
}

console.log(Factorialize_recursive(5))