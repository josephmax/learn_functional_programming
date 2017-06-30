let arrA = [1, 2, 3, 4, 5];
// 返回每一项加1后的数组;

let newArr = []
for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] >=3) {
        newArr.push(arrA[i])
    }
}
console.log(newArr)

let arrB = arrA.filter(item => item >= 3)

console.log('arrB', arrB)
console.log('arrA', arrA)

Array.prototype.reduce