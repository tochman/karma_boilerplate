describe('FizzBuzz - index.html', function() {
  beforeEach(function() {
    // We can load fixtures using this method:
    //jasmine.getFixtures().clearCache();
    //var f = jasmine.getFixtures();
    //f.fixturesPath = 'base/spec/fixtures';
    //f.load('partial.html');
    //$.holdReady(false);

    // Or this:
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('partial.html');
    $.holdReady(false);
  });

  afterEach(function() {
    //clear up after each test like this:
    //jasmine.getFixtures().cleanUp();

    //Or like this:
    //var f = jasmine.getFixtures();
    //f.cleanUp();
    //f.clearCache();

    //But is has no effect what so ever... ???
  });

  describe("lets user check values", function() {

    it("displays Fizz if value is divisible with 3", function() {
      $('#number').val('3');
      $('#run').trigger('click');
      expect($('#display_message').text()).toBe('3 returns: Fizz');
    });

    it("displays Buzz if value is divisible with 5", function() {
      $('#number').val('5');
      $('#run').trigger('click');
      expect($('#display_message').text()).toBe('5 returns: Buzz');
    });

    it("displays FizzBuzz if value is divisible with 15", function() {
      $('#number').val('15');
      $('#run').trigger('click');
      expect($('#display_message').text()).toBe('15 returns: FizzBuzz');
    });

    it("displays number if value is not divisible by 3, 5 or 15", function() {
      $('#number').val('4');
      $('#run').trigger('click');
      expect($('#display_message').text()).toBe('4 returns: 4');
    });

  });

});
