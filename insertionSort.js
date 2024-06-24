function insertionSort (array) {
    for (let i = 1; i < array.length; i++) {
      let heldValue = array[i];
      
      let j = i - 1;
      while (j >= 0 && array[j] > heldValue) {
        array[j + 1] = array[j];
        j = j - 1;
      }
      array[j + 1] = heldValue;
    }
    return array;
  };