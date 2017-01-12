describe('Bubble Sort', function(){

  beforeEach(function(){
    spyOn(window, 'swap').and.callThrough();
  });



  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a non-empty array', function(){
    expect( bubbleSort([10, 9, 8, 7, 6, 5, 4]) ).toEqual( [4,5,6,7,8,9,10] );
    expect( swap.calls.count()).toEqual(21);
  });



});


