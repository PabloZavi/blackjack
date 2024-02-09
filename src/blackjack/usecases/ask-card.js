/**
 * This function draw a card of a deck, returns the card and
 * @param {Array<String>} deck es un arreglo de strings
 * @returns {String} A card, for example: '9C'
 */
export const askCard = (deck) => {
  if (deck.length === 0 || !deck) {
    throw 'There are no more cards in the deck';
  }
  return deck.shift(); //The first element
};
