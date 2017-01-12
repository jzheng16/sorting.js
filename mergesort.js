function split(wholeArray) {

  let median = Math.ceil(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, median);
  let secondHalf = wholeArray.slice(median);

  return [firstHalf, secondHalf];
}

function merge (arr1, arr2) {
  let outputArr = [];

  while (arr1.length && arr2.length){
    if (arr1[0] > arr2[0]){
      outputArr.push(arr2[0]);
      arr2.shift();
    }

    else {
      outputArr.push(arr1[0]);
      arr1.shift();
    }
  }


  while (arr1.length || arr2.length){
    if (arr1.length) {
      outputArr.push(arr1[0]);
      arr1.shift();
    }
    if (arr2.length) {
      outputArr.push(arr2[0]);
      arr2.shift();
    }
  }

  return outputArr;


}

function mergeSort(array){

  if(array.length <= 1){
    return array
  } else {

      let firstHalf = split(array)[0];
      let secondHalf = split(array)[1];
      firstHalf = mergeSort(firstHalf);
      secondHalf = mergeSort(secondHalf);
      return merge(firstHalf, secondHalf);

  }

}
