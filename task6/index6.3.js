function removeElement(array, item) {
    return array.filter(element => element !== item);
}

const array = [1, 3, 4, 6, 2, 5, 7];
const newArray = removeElement(array, 4);

console.log(newArray);