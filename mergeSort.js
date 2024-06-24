function mergeSort(array) {
    if (array.length <= 1) return array;
    
    let halved = Math.floor(array.length / 2);
    
    let lArray = mergeSort(array.slice(0, halved));
    let rArray = mergeSort(array.slice(halved));
    
    return merge(lArray, rArray)
  }
  
  function merge(lArray, rArray) {
    let sortedArray = [];
  
    while (lArray.length && rArray.length) {
      if(lArray[0] <= rArray[0]) {
        sortedArray.push(lArray.shift());
      } else {
        sortedArray.push(rArray.shift());
      }
    }
  
    return sortedArray.concat(lArray, rArray);
  }