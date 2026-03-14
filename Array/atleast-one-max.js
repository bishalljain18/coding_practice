const atleastOneMax = (arr) => {
    let max = -Infinity;
    let result = 0;
    for(let i=0;i <arr.length;i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    let count = 0;
    for(let i=0;i<arr.length;i++) {
        if(arr[i] == max) {
            count++
        }
    }

    return arr.length - count;
}

let arr = [5, 5, 10, 10, 8]
console.log(atleastOneMax(arr)); // 3
console.log(atleastOneMax([1,2,3,4,5,5])); //4