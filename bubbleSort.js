function bubbleSort(array) {
    let swapHappened
    
    do {
      swapHappened = false;
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          let tempArray = array[i];
          array[i] = array[i + 1];
          array[i + 1] = tempArray;
          swapHappened = true;
        }
      }
    } while (swapHappened);
    return array;
}