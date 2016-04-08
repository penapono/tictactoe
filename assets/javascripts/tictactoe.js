$(function() {

  // Variáveis globais: podem ser usadas em todo o documento
  var campos = $('td'),
      jogador = 'x';

  // Evento de clique em uma das cédulas do tabuleiro
  campos.on('click', function() {
    var campo_clicado = $(this);

    if (campo_clicado.attr('valor') === '') {
      marcaCampo(campo_clicado);
      verificaFimJogo();
      proximoJogador();
    }
  });

  function marcaCampo(campo_clicado) {
    campo_clicado.addClass(jogador);
    campo_clicado.attr('valor', jogador);
  }

  function proximoJogador() {
    if (jogador === 'x') {
      jogador = 'o';
    }
    else {
      jogador = 'x';
    }
  }

  // Função que verifica se o jogo já terminou
  function verificaFimJogo() {
    if(acertouHorizontal() || acertouVertical() || acertouDiagonal()) {
      alert('O jogador ' + jogador.toUpperCase() + ' ganhou!');
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
  function acertouHorizontal() {
    // Linha 1 -> campos 1, 2 e 3
    if (!camposVazios(1,2,3) && camposIguais(1,2,3)) {
      return true;
    }

    // Linha 2 -> campos 4, 5 e 6
    if (!camposVazios(4,5,6) && camposIguais(4,5,6)) {
      return true;
    }

    // Linha 3 -> campos 7, 8 e 9
    if (!camposVazios(7,8,9) && camposIguais(7,8,9)) {
      return true;
    }

    return false;
  }

  // Verifica se as colunas da tabela possuem símbolos iguais
  function acertouVertical() {
    // Coluna 1 -> campos 1, 4 e 7
    if (!camposVazios(1,4,7) && camposIguais(1,4,7)) {
      return true;
    }

    // Coluna 2 -> campos 2, 5 e 8
    if (!camposVazios(2,5,8) && camposIguais(2,5,8)) {
      return true;
    }

    // Coluna 3 -> campos 3, 6 e 9
    if (!camposVazios(3,6,9) && camposIguais(3,6,9)) {
      return true;
    }

    return false;
  }

  // Verifica se as diagonais da tabela possuem símbolos iguais
  function acertouDiagonal() {
    // Diagonal -> campos 1, 5 e 9
    if (!camposVazios(1,5,9) && camposIguais(1,5,9)) {
      return true;
    }

    // Diagonal -> campos 3, 5 e 7
    if (!camposVazios(3,5,7) && camposIguais(3,5,7)) {
      return true;
    }

    return false;
  }

  function camposIguais(parametro1, parametro2, parametro3) {
    var valor1 = $('#' + parametro1);
    var valor2 = $('#' + parametro2);
    var valor3 = $('#' + parametro3);

    if(valor1.attr('valor') === valor2.attr('valor') &&
        valor2.attr('valor') == valor3.attr('valor')) {
      return true;
    }
    return false;
  }

  function camposVazios(parametro1, parametro2, parametro3) {
    var valor1 = $('#' + parametro1);
    var valor2 = $('#' + parametro2);
    var valor3 = $('#' + parametro3);

    if((valor1.attr('valor') === '' || valor2.attr('valor') === '' ||
      valor3.attr('valor') === '')) {
      return true;
    }

    return false;
  }

  // Verifica se todas as campos estão preenchidas
  function verificaVelha() {
    for(var i = 0; i < campos.length; i++) {
      if($(campos[i]).attr('valor') === '') {
        return false;
      }
    }
    return true;
  }

  // Limpa tanto a imagem, quanto o valor da campo
  function limpaTabuleiro() {
    for(var i = 0; i < campos.length; i++) {
      $(campos[i]).attr('valor', '');
      $(campos[i]).removeClass();
    }
  }
});
