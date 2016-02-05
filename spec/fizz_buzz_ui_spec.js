describe('FizzBuzz - index.html', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/';
    loadFixtures('partial.html');
    $.holdReady(false);
  });

  it("displays Buzz if value is divisible with 5", function() {
    $('#number').val('5');
    $('#run').trigger('click');
    expect($('#display_message').text()).toBe('5 returns: Buzz');

    $('#number').val('3');
    $('#run').trigger('click');
    expect($('#display_message').text()).toBe('3 returns: Fizz');

    $('#number').val('15');
    $('#run').trigger('click');
    expect($('#display_message').text()).toBe('15 returns: FizzBuzz');
  });

  // it("displays Fizz if value is divisible with 3", function() {
  //   debugger

  // });

  xit("displays FizzBuzz if value is divisible with 15", function() {

  });

  afterEach(function() {
    // jasmine.cleanUp();
  });
});
