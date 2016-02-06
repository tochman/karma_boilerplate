
var onReadyEvents = function(){
  $('#run').click(function() {
    var num = parseFloat($('#number').val());
    var game = new FizzBuzz();
    var message = game.fizz_buzz(num);
    $('#display_message').html(num + ' returns: ' + message);
  });
}
