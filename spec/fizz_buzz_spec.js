describe("FizzBuzz", function() {
  var game;

  beforeEach(function() {
    game = new FizzBuzz();
  });

  it("returns a number", function() {
    expect(game.fizz_buzz(1)).toEqual(1);
  });

  it("returns 'Fizz'", function() {
    expect(game.fizz_buzz(3)).toEqual('Fizz');
  });

  it("returns 'Buzz'", function() {
    expect(game.fizz_buzz(5)).toEqual('Buzz');
  });

  it("returns 'FizzBuzz'", function() {
    expect(game.fizz_buzz(15)).toEqual('FizzBuzz');
  });
});
