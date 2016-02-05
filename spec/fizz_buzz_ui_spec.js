describe('FizzBuzz - index.html', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/';
    loadFixtures('partial.html');
    $.holdReady(false);
  });

  afterEach(function() {
    jasmine.getFixtures().cleanUp();
  })

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

      $('#number').val('4');
      $('#run').trigger('click');
      expect($('#display_message').text()).toBe('4 returns: 4');
    });

    xit("displays number if value is not divisible by 3, 5 or 15", function() {

    });

  });

});
