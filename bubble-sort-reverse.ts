const bubbleSortReverse = (arr: []) => {
    for(let i=0;i<arr.length;i++) {
        for(let j = arr.length-1; j>i;j--) {
            if(arr[j] < arr[j-1]) {
                let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
        }
    } 
}