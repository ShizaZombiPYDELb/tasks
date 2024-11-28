const array = [1, 3, 4, 6, 2, 5, 7];
const del = prompt(`massive ${array},whitch index we delete?`);

if (typeof del !== typeof 'number') {
    alert("це не число");
} else {
    alert("norm");
}
array.splice(del,1);

console.log(array);

