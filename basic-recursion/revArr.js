const arr = [1, 2, 3, 4, 5, 6];
let len = arr.length - 1;
let newArr = [];
const revArr = (array, len) => {
    if (len >= 0) {
        newArr.push(array[len]);
        len--;
        revArr(array, len);
    }
};
revArr(arr, len);
console.log(newArr);
