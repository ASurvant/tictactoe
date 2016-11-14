$(function(){
  $turn = true;

  $('div').mouseenter(function(){
    $(this).css("background-color", "yellow");
  });

  $('div').mouseleave(function(){
    $(this).css("background-color", "white");
  });

  $('div').click(function(){
    if($turn) {
      $(this).append('X');
      $turn = !$turn;
    } else {
      $(this).append('O');
      $turn = !$turn;
    };
  });
});
