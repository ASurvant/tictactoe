$(function() {
  $turn = true;
  $('.whose-move').text("someone start");

  $('div').mouseenter(function() {
    $(this).css("background-color", "yellow");
  });

  $('div').mouseleave(function() {
    $(this).css("background-color", "white");
  });

  $('div').click(function() {
    if ($(this).empty) {
      if ($turn && !$(this).hasClass('.taken')) {

        $(this).append('<h5>X</h5>').addClass('.taken');
        $turn = !$turn;
        $('.whose-move').text("player 2's move");

      } else if (!$(this).hasClass('.taken')) {

        $(this).append('<h5>O</h5>').addClass('.taken');
        $turn = !$turn;
        $('.whose-move').text("player 1's move");
      };
    };
  });


});
