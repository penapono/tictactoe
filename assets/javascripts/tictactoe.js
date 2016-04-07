$(function() {

  // Variáveis globais: podem ser usadas em todo o documento
  var turno_x = true,
      ganhador = '',
      cedulas = $('.cedula');

  // Evento de clique em uma das cédulas do tabuleiro
  cedulas.on('click', function() {
    if (!($(this).hasClass('x')) && (!$(this).hasClass('o'))) {
      if (turno_x) {
        $(this).addClass('x');
        $(this).val('X');
      }
      else {
        $(this).addClass('o');
        $(this).val('O');
      }

      // Muda o turno_x para a próxima jogada
      // turno_x == true -> jogador X
      // turno_x == false -> jogador O
      turno_x = !turno_x;

      verificaFimJogo();
    }
  });

  // Função que verifica se o jogo já terminou
  function verificaFimJogo() {
    if(verificaHorizontal() || verificaVertical() || verificaDiagonal()) {
      alert('O jogador ' + ganhador + ' ganhou!');
      // Limpa o tabuleiro e começa novo jogo
      limpaTabuleiro();
    }
    else {
      if(verificaVelha()) {
        alert('Deu velha!');
        // Limpa o tabuleiro e começa novo jogo
        limpaTabuleiro();
      }
    }
  }

  // Verifica se as linhas da tabela possuem símbolos iguais
  function verificaHorizontal() {
    // Linha 1 -> cédula 0, cédula 1 e cédula 2
    if (!cedulasVazias($('#0'), $('#1'), $('#2'))) {
      if ($('#0').val() === $('#1').val() && $('#1').val() === $('#2').val()) {
        ganhador = $('#0').val();
        return true;
      }
    }

    // Linha 2 -> cédula 3, cédula 4 e cédula 5
    if (!cedulasVazias($('#3'), $('#4'), $('#5'))) {
      if ($('#3').val() === $('#4').val() && $('#4').val() === $('#5').val()) {
        ganhador = $('#3').val();
        return true;
      }
    }

    // Linha 3 -> cédula 6, cédula 7 e cédula 8
    if (!cedulasVazias($('#6'), $('#7'), $('#8'))) {
      if ($('#6').val() === $('#7').val() && $('#7').val() === $('#8').val()) {
        ganhador = $('#6').val();
        return true;
      }
    }

    return false;
  }

  // Verifica se as colunas da tabela possuem símbolos iguais
  function verificaVertical() {
    // Coluna 1 -> cédula 0, cédula 3 e cédula 6
    if (!cedulasVazias($('#0'), $('#3'), $('#6'))) {
      if ($('#0').val() === $('#3').val() && $('#3').val() === $('#6').val()) {
        ganhador = $('#0').val();
        return true;
      }
    }

    // Coluna 2 -> cédula 1, cédula 4 e cédula 7
    if (!cedulasVazias($('#1'), $('#4'), ('#7'))) {
      if ($('#1').val() === $('#4').val() && $('#4').val() === $('#7').val()) {
        ganhador = $('#1').val();
        return true;
      }
    }

    // Coluna 3 -> cédula 2, cédula 5 e cédula 8
    if (!cedulasVazias($('#2'), $('#5'), $('#8'))) {
      if ($('#2').val() === $('#5').val() && $('#5').val() === $('#8').val()) {
        ganhador = $('#2').val();
        return true;
      }
    }

    return false;
  }

  // Verifica se as diagonais da tabela possuem símbolos iguais
  function verificaDiagonal() {
    // Diagonal -> cédula 0, cédula 4 e cédula 8
    if (!cedulasVazias($('#0'), $('#4'), $('#8'))) {
      if ($('#0').val() === $('#4').val() && $('#4').val() === $('#8').val()) {
        ganhador = $('#0').val();
        return true;
      }
    }

    // Diagonal -> cédula 2, cédula 4 e cédula 6
    if (!cedulasVazias($('#2'), $('#4'), $('#6'))) {
      if ($('#2').val() === $('#4').val() && $('#4').val() === $('#6').val()) {
        ganhador = $('#2').val();
        return true;
      }
    }
    return false;
  }

  // Verifica se todas as cédulas estão preenchidas
  function verificaVelha() {
    for(var i = 0; i < cedulas.length; i++) {
      if($(cedulas[i]).val() === "") {
        return false;
      }
    }
    return true;
  }

  // Uma cédula está vazia quando ela não possui nem a classe ".o" nem a ".x"
  function cedulasVazias(cedula1, cedula2, cedula3) {
    if((cedula1.val() === "") && (cedula2.val() === "") && (cedula3.val() === "")) {
      return true;
    }
    return false;
  }

  // Limpa tanto a imagem, quanto o valor da cédula
  function limpaTabuleiro() {
    for(var i = 0; i < cedulas.length; i++) {
      if($(cedulas[i]).hasClass('o')) {
        $(cedulas[i]).removeClass('o');
      }
      else if($(cedulas[i]).hasClass('x')) {
        $(cedulas[i]).removeClass('x');
      }
      $(cedulas[i]).val('');
    }
  }
});
