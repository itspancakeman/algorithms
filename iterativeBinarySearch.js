function binarySearch(arr, element){
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === element) {
        return mid;
      } else if (arr[mid] < element) {
        left = mid + 1
      } else if (arr[mid] > element) {
        right = mid - 1;
      }
    }
       
      return -1;
}