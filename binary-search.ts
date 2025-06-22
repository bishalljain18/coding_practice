const binarySearch = (arr: [], number: number) => {
    let low = 0;
    let high = arr.length - 1;
    while (low<=high) {
        let mid = Math.floor(low + (high-low)/2)
        if(arr[mid] === number) {
            return true
        } else if(arr[mid] > number) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    } 
} 