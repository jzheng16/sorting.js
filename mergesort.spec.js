describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([[1, 2, 3, 4], [5, 6, 7, 8]])
  });
  it('is able to split an odd-lengthed array into two halves', function () {
    expect(split([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9]])
  })
});

/*
describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([2], [1])).toEqual([1, 2])
  });
});
*/
describe('Merge Sort', function(){
  it('is able to mergesort an odd array', function(){
    expect(mergeSort([2, 4, 10, 3, 5, 1, 8])).toEqual([1, 2, 3, 4, 5, 8, 10])
  });


  it('is able to mergesort an even array', function(){
    expect(mergeSort([2, 4, 10, 3, 5, 6, 100, 23, 10, 3, -100,50])).toEqual([-100,2, 3, 3, 4, 5, 6, 10, 10, 23, 50,100])
  });

});
