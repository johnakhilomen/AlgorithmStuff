function longestWordInAString(string)
{
    let lens = [];
    const regex = /[\s,]+/;
    string.split(regex).forEach(element => {
        lens.push({
            word: element,
            length : element.length})
    });
    //console.log(lens)
    //We'll sort in descending order
    var maxWord = lens.sort((a,b)=>b.length-a.length);
    //return the first element 
    return maxWord[0]
}

const str = "The man is coming home tonight, at least now you know, tonights"
console.log(longestWordInAString(str))

function longestWordInAString_solution2(string)
{
    const regex = /[\s,]+/;
    let tokenized = string.split(regex);
    let max = tokenized.reduce((x, y) => 
        Math.max((x, y.length))
    );
    // console.log(tokenized)
    const maxWord = tokenized.find(word=>word.length === max);
    return {[maxWord] : maxWord.length}
    
}

console.log(longestWordInAString_solution2(str))