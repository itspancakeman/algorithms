function quickSort(array){
    if (array.length <= 1) {
      return array;
    }
    
    let pivot = array[0];
    let lArray = [];
    let rArray = [];
    
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        lArray.push(array[i]);
      } else {
        rArray.push(array[i]);
      }
    }
    
    return [...quickSort(lArray), pivot, ...quickSort(rArray)];
  };