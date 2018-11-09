describe("FizzBuzz", function () {


    it('should return Fizz for 3', function () {
        var result = FizzBuzz.check(3);
        expect(result).toEqual('Fizz');
    });

    it('should return Fizz for 9', function () {
        var result = FizzBuzz.check(9);
        expect(result).toEqual('Fizz');
    });

    it('should return Fizz for 5', function () {
        var result = FizzBuzz.check(5);
        expect(result).toEqual('Buzz');
    });

    it('should return FizzBuzz for 15', function () {
        var result = FizzBuzz.check(15);
        expect(result).toEqual('FizzBuzz');
    });

    it( 'should return Zero for 0', function() {
        var result = FizzBuzz.check( 0 );
        expect( result ).toEqual( 'Zero' );
      });


});