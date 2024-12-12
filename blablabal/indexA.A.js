// for (let i =1; i <= 50; i++){
//     if (i % 3 === 0){
//         console.log(i)
//     }
// }
//

// =-==-=-=-=-=-=-=-=-=-=-=-=-=-

// const set = 0;
//
// while ( set <= 100) {
//     if (set % 3 === 0){
//         console.log(set);
//     }
// }

// for (let i = 0; i <= 100; i++) {
//     if ( i % 3 === 0) {
//         console.log(i);
//     }
// }

// =-==-=-=-=-=-=-=-=-=-=-=-=-=-

// for (let i = 1; i <= 10; i++) {
//     console.log(i*i);
// }

// =-==-=-=-=-=-=-=-=-=-=-=-=-=-

// for (let i = 200; i >= 150; i--) {
//     console.log(i);
// }

// =-==-=-=-=-=-=-=-=-=-=-=-=-=-

// function createProduct() {
//     let count = 2;
//     function Product(y) {
//         count *= y;
//         return count;
//     }
//     return Product;
// }
//
// const total = createProduct();
// console.log(total(21));
// console.log(total(80));
// console.log(total(5));



// function arrLog() {
//     let array = [1,2,3,4,5,6];
//     function arrayLog(y) {
//         array.push(y);
//         return array;
//     }
//     return arrayLog;
// }
//
// const tatol = arrLog();
// console.log(tatol(7));
// console.log(tatol(8));
// console.log(tatol(9));

//=-==-==-=-=-==-=-======-===-

//
// function multiplyThree1() {
//     let count1 = 1;
//     function multiplyTwo1(x) {
//         count1 *= x;
//         function multiplyOne1(y) {
//             count1 *= y;
//             function multiply1(z) {
//                 count1 *= z;
//                 return count1;
//             }
//             return multiply1;
//         }
//         return multiplyOne1;
//     }
//     return multiplyTwo1;
// }
// const total1 = multiplyThree1();
// console.log(total1(5)(2)(3));
//
//
// function multiplyThree() {
//     let count = 1;
//     function multiplyTwo(x) {
//         count *= x;
//         function multiplyOne(y) {
//             count *= y;
//             function multiply(z) {
//                 count *= z;
//                 return count;
//             }
//             return multiply;
//         }
//         return multiplyOne;
//     }
//     return multiplyTwo;
// }
// const total = multiplyThree();
// console.log(total(4)(2)(3));

// metod carring



// function multiplyThree2(x) {
//     return function (c){
//         return function (v){
//             return function (b){
//                 return x * c * v * b;
//             };
//         };
//     };
// }
//
//
// console.log(multiplyThree2(5)(2)(3)(8));


// function totalData(data) {
//     let total = 0;
//     for (const item of data) {
//         if (Array.isArray(item)) {
//             total += totalData(item);
//         } else {
//             total += item;
//         }
//     }
//     return total;
//
// }
//
// console.log(totalData([1, [2, 3], [4, [5, 6]], 7]));



//
// function dd() {
//     if (arr.length <= 1) return true;
//         if (arr[0] !== arr[arr.length - 1]) return false;
//         return dd(arr.slice(1, arr.length - 1));
//
// }
//
// console.log(dd([1, 2, 3, 2, 1]))
//





let target = 1;


function ddd(arr, target) {
    if (arr.length === 0) return 0;
        return (arr[0] === target ? 1 : 0) + ddd(arr.slice(1), target);
}

console.log(ddd([1, 2, 3, 1, 4, 1, 5], 1));  // 3
// function countOccurrences(arr, target) {
//     if (arr.length === 0) return 0;
//     return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
// }
//
// console.log(countOccurrences([1, 2, 3, 1, 4, 1, 5], 1));  // 3