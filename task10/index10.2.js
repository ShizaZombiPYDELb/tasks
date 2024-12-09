const array = [1,2,3,4,5,6,7,8,9];

function getEvenNumbers(array) {
    let result = [];
    for (let i = 0; i < array.length; i++)
    {
        if ( array[i] % 2 === 0) {
            result.push(array[i]);
        }
    }
    return result;
}


const even = getEvenNumbers(array);
console.log(even);