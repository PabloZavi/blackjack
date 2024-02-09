import { initGame, pcTurn, playerTurn } from './usecases';
import { btnAskCard, btnNewGame, btnStop } from './usecases/html-references';

//We use const zzz = (() => {//code})() in order not to show the code externaly
const game = (() => {
  'use strict';
  /*
   * 2C: Two of Clubs
   * 2D: Two of Diamonds
   * 2H: Two of Hearts
   * 2S: Two of Spades
   */

  const tipos = ['C', 'D', 'H', 'S'];
  const specials = ['A', 'J', 'Q', 'K'];

  let deck = [];
  let playersPoints = [];
  let playerWins = true;

  //New game button
  btnNewGame.addEventListener('click', () => {
    //initGame(undefined, tipos, specials, deck, playersPoints, playerWins);
    ({ deck, playersPoints, playerWins } = initGame(
      undefined,
      tipos,
      specials
    ));
  });

  //Player asks for a card
  btnAskCard.addEventListener('click', () => {
    playerTurn(deck, playersPoints, playerWins);
  });

  //Stop player turn (now is the turn of the PC)
  btnStop.addEventListener('click', () => {
    btnAskCard.disabled = true;
    btnStop.disabled = true;
    pcTurn(deck, playersPoints, playerWins);
  });

  return { initGame };
})();
