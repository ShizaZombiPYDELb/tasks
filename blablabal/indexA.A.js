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


