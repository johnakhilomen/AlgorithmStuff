function countShip(counter)
{
    //The base is when counter decreases to 0
    if (counter == 0)
    {
       return "All sheep jumped over the fence";  
    }
    console.log(counter+": Another sheep jumps over the fence");
    counter--;
    return countShip(counter);
    
}

console.log(countShip(3));

function powerCalculator(base, exponent)
{
    if (exponent < 0)
    {
        return "exponent should be >= 0";
    }
    else
    {
        return (base ** exponent);
    }
}

console.log(powerCalculator(3, -2));
console.log(powerCalculator(3, 2));