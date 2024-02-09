import _ from 'underscore';

/**
 * This function creates a new deck
 * @param {Array<String>} cardsTypes Example: ['C', 'D', 'H', 'S']
 * @param {Array<String>} cardsSpecials Example: ['A', 'J', 'Q', 'K']
 * @returns  {Array<String>} Returns a new deck of cards
 */
export const createDeck = (cardsTypes, cardsSpecials) => {
  if (!cardsTypes) throw new Error('cardsTypes is obligatory');
  if (!cardsTypes.length > 0)
    throw new Error('cardsTypes has to have elements');
  if (!cardsSpecials) throw new Error('cardsSpecials is obligatory');
  if (!cardsSpecials.length > 0)
    throw new Error('cardsSpecials has to have elements');

  let deck = [];
  for (let tipo of cardsTypes) {
    for (let i = 2; i <= 10; i++) {
      deck.push(i + tipo);
    }
    for (const special of cardsSpecials) {
      deck.push(special + tipo);
    }
  }
  return _.shuffle(deck);
};
