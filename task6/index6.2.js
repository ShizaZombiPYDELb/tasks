const arr = [1,122,3,34,"asdf",'76543'];

function sum() {
    let count = 0;
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            count += arr[i];
            num ++;
        }
    }
    return count / num;
}

alert(sum(arr));
console.log(sum(arr));