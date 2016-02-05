describe('FizzBuzz - index.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/';
    loadFixtures('index.html');
    //document.body.innerHTML = __html__['index.html'];
    $.holdReady(false);
  });

  it("displays Fizz if value is divisible with 3", function() {
    $('#number').val('3');
    $('#run').trigger('click');
    expect($('#display_message').text()).toBe('3 returns: Fizz');
  });

  xit("displays Buzz if value is divisible with 5", function() {
    $('#number').val('5');
    $('#run').trigger('click');
    expect($('#display_message').text()).toBe('5 returns: Buzz');
  });

  xit("displays FizzBuzz if value is divisible with 15", function() {
    $('#number').val('15');
    $('#run').trigger('click');
    expect($('#display_message').text()).toBe('15 returns: FizzBuzz');
  });
});
