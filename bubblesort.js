function bubbleSort(array) {
  var hasSwapped = true;
  var counter = 0;
  while(hasSwapped){
    hasSwapped = false;

    for (var i = 0, len = array.length-1; i < len; i++){
      if (array[i] > array[i+1]){
        array = swap(array, i, i+1);
        counter++;

        hasSwapped = true;
      }

    }
}
  return array;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;

}
