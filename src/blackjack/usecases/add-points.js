import { cardValue } from "./card-value";
import { puntosHTML } from "./html-references";


/**
 * This function adds points to a player depending the card that they have
 * @param {Array<Number>} playersPoints The points of each player //player: 0 for the first player - last position for the PC
 * @param {Number} player The number of the player who is playing at the moment
 * @param {String} card The card of the player
 * @returns The current points of the player after adding the last card
 */
export const addPoints = (playersPoints,player, card) => {
    playersPoints[player] += cardValue(card);
    puntosHTML[player].innerText = playersPoints[player];
    return playersPoints[player];
  };