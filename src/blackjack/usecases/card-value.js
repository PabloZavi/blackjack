/**
 * This function returns the value of a card
 * @param {String} card Example: '9J'
 * @returns {Number} The value of the card Example: 9
 */
export const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);
    return isNaN(value) //It's not a number
      ? value === 'A'
        ? 11
        : 10
      : Number(value); //We can multiply *1 too to convert a string to a number
  };