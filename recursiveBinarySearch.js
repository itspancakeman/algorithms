function recursiveBinarySearch(arr, element){
    function recursiveHelper(left, right) {
      if (left > right) {
        return -1;
      }
      
      let mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === element) {
        return mid;
      }
      
      if (arr[mid] > element) {
        return recursiveHelper(left, mid - 1);
      }
      
      return recursiveHelper(mid + 1, right);
    }
    
    return recursiveHelper(0, arr.length - 1);
}