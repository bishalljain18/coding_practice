const sumOfTwoK = (arr, k) => {
    for(let i=1;i<arr.length;i++) {
        for(let j=0;j<i-1;j++) {
            if(arr[i] + arr[j] == k) {
                return true;
            }       
        }
    }
    return false;
}

let arr1 = [2,4,-3,7];
let arr2 = [2,3,8,5,3];

console.log(sumOfTwoK(arr1, 5)); // false
console.log(sumOfTwoK(arr1, 8)); // false
console.log(sumOfTwoK(arr2, 6)); // true