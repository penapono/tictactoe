$(function() {
  'use strict';

  var x_turn = true;

  $('.square').on('click', function() {
    var self = $(this);

    if (self.html() == '') {
      if (x_turn) {
        self.html('<center>X</center>');
      }
      else {
        self.html('<center>O</center>');
      }

      // Muda o x_turn para a próxima jogada
      // false == O
      // true == X
      x_turn = !x_turn;

      verifyGame();
    }
  });

  function verifyGame() {
    var square = $('.square');
    if ( verifyHorizontal() || verifyVertical() || verifyDiagonal() ) {
      alert('Ganhou!');
    }
    else {
      verifyOldLady();
    }
  };

  function verifyHorizontal() {
    var horizontal = false;
    $('#0, #1, #2');
    $('#3, #4, #5');
    $('#6, #7, #8');
    return horizontal;
  };

  function verifyVertical() {
    var vertical = false;
    $('#0, #3, #6');
    $('#1, #4, #7');
    $('#2, #5, #8');
    return vertical;
  };

  function verifyDiagonal() {
    var diagonal = false;
    $('#0, #4, #8');
    $('#2, #4, #6');
    return diagonal;
  }

  function verifyOldLady() {
    $('#0, #1, #2, #3, #4, #5, #6, #7, #8');
  }
});
