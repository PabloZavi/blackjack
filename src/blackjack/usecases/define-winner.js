/**
 * This function defines a winner
 * @param {Array<Number>} playersPoints An array with the players points -PC is the last position-
 */
export const defineWinner = (playersPoints) => {
  const [playerPoints, pcPoints] = playersPoints;

  //setTimeOut in order to show first the cards and then the message
  setTimeout(() => {
    pcPoints > 21
      ? alert('Player Wins!')
      : (pcPoints <= 21 && pcPoints > playerPoints) || playerPoints > 21
      ? alert('PC Wins')
      : pcPoints === playerPoints && alert('Push');
  }, 1000);
};
