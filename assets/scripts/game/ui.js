'use strict';

const game = require('./game');

const gameMessage = (messageId) => {
  $(messageId).show().delay(3000).fadeToggle('slow');
};

const createGameFailure = () => {
  gameMessage('#create-game-fail');
};

const endGameFailure = () => {
  gameMessage('#end-game-fail');
};

const takeTurnFailure = () => {
  gameMessage('#turn-fail');
};

const clearCells = () => {
  for (let i = 0; i < 9; i++) {
    let cell = $('.game-board').find("[data-id='" + i + "']");
    cell.html('');
  }
};

const toggleNewGameButton = () => {
  if($('.new-game').attr('disabled')) {
    $('.new-game').removeAttr('disabled');
  } else {
    $('.new-game').attr('disabled', 'disabled');
  }
};

const endGame = () => {
  toggleNewGameButton();
  console.log('winner is', game.winner);
};

const invalidMove = () => {
  console.log('bad move');
};

const markCell = (id) => {
  console.log('turn success!');
  let cell = $('.game-board').find("[data-id='" + id + "']");
  if (game.xTurn) {
    cell.html('<i class="fa fa-circle x" aria-hidden="true"></i>');
  } else if (!game.xTurn) {
    cell.html('<i class="fa fa-circle-o o" aria-hidden="true"></i>');
  }
};

const setPlayerX = () => {
  $('.fa-arrow-right').fadeIn('fast');
};

const indicatePlayer = () => {
  $('.fa-arrow-right').fadeToggle('fast');
  $('.fa-arrow-left').fadeToggle('fast');
};

const hideWelcome = () => {
  $('#welcome').hide();
};

module.exports = {
  clearCells,
  endGame,
  invalidMove,
  markCell,
  indicatePlayer,
  setPlayerX,
  hideWelcome,
  toggleNewGameButton,
  createGameFailure,
  endGameFailure,
  takeTurnFailure,
};
