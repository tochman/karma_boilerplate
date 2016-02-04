function FizzBuzz() {};

FizzBuzz.prototype._hasZeroReminder = function(number, divisor) {
  return (number % divisor === 0);
};

FizzBuzz.prototype.divisibleByThree = function(number) {
  return this._hasZeroReminder(number, 3);
};

FizzBuzz.prototype.divisibleByFive = function(number) {
  return this._hasZeroReminder(number, 5);
};

FizzBuzz.prototype.divisibleByFifteen = function(number) {
  return this._hasZeroReminder(number, 15);
};

FizzBuzz.prototype.fizz_buzz = function(number) {
  if (this.divisibleByFifteen(number)) {
    return "FizzBuzz";
  } else if (this.divisibleByFive(number)) {
    return "Buzz";
  } else if (this.divisibleByThree(number)) {
    return "Fizz";
  } else
    return number;
};
