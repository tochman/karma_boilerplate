describe('FizzBuzz - index.html', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/';
    loadFixtures('partial.html');
    $.holdReady(false);
  });

  describe("lets user check values", function() {
    it("displays Fizz if value is divisible with 3", function() {

      $('#number').val('5');
      $('#run').trigger('click');
      expect($('#display_message').text()).toBe('5 returns: Buzz');

      $('#number').val('15');
      $('#run').trigger('click');
      expect($('#display_message').text()).toBe('15 returns: FizzBuzz');

      $('#number').val('3');
      $('#run').trigger('click');
      expect($('#display_message').text()).toBe('3 returns: Fizz');
    });

    xit("displays FizzBuzz if value is divisible with 15", function() {

    });

  });


  afterEach(function() {
    //cleanUp();
  });
});
