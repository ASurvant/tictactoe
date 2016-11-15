$(function() {
  $turn = true;
  $over = false;
  $('.whose-move').text("someone start");
  $player1 = [];
  $player2 = [];

  $winConditions = [
    ["tl","tm","tr"],["tl","mm","br"],["tl","ml","br"],
    ["tm","mm","bm"],["tr","mr","br"],["ml","mm","mr"],
    ["tr","mm","bl"],["br","bm","bl"]
  ];

  $('div').mouseenter(function() {
    $(this).css("background-color", "yellow");
  });

  $('div').mouseleave(function() {
    $(this).css("background-color", "white");
  });

  function winCheck() {
    for (var i = 0; i < $winConditions.length; i++) {
      var poc = 0;
      var ptc = 0;

      for (var j = 0; j < $winConditions[i].length; j++) {
        if ($player1.indexOf($winConditions[i][j]) > -1) {
          poc += 1;
        } else if ($player2.indexOf($winConditions[i][j]) > -1) {
          ptc += 1;
        }
      };

      if (poc === 3) {
        $('.whose-move').text("PLAYER ONE FTW!!");
        $over = true;
        $('.reset').text("(click me to reset)");
      } else if (ptc == 3) {
        $('.whose-move').text("PLAYER TWO won or something")
        $over = true;
        $('.reset').text("(click me to reset)");
      }
      if (!$over && $player1.length === 5) {
        $('.whose-move').text("DRAW!!!")
        $over = true;
        $('.reset').text("(click me to reset)");
      }
    }
  }


  $('div').click(function() {

     if (!$over) {
       if ($turn && !$(this).hasClass('.taken')) {

         $player1.push(this.id);
         $(this).append('<h5>X</h5>').addClass('.taken');
         $turn = !$turn;
         $('.whose-move').text("player two's move");
         winCheck();

       } else if (!$(this).hasClass('.taken')) {

         $player2.push(this.id);
         $(this).append('<h5>O</h5>').addClass('.taken');
         $turn = !$turn;
         $('.whose-move').text("player one's move");
         winCheck();
       };
     };
   });

  $('.reset').click(function() {
    if ($over) {
      $over = false;
      $('.whose-move').text("someone start");
      $player1 = [];
      $player2 = [];
      $('.tile').text("");
      $('.tile').removeClass('.taken');
      $('.reset').text("");
    }
  });
});
