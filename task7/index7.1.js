function foo() {
    let count = 0;
    function baa(y) {
        count += y;
        return count;
    }
    return baa;
}


const sum = foo();

console.log(sum(4)); // 4

console.log(sum(6)); // 10

console.log(sum(10)); // 20

console.log(sum(7)); // 27