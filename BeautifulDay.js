function beautifulDays(i, j, k) {
    // Write your code here
    let res = []
    for (let x = i; x <= j; x++)
    {
        let reversedX = (""+x).split("").reverse("").join(""); 
        if((x - reversedX) % k === 0)
        {
            res.push(x)
        }
    }
    return res.length;
}