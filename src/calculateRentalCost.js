/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_DAILY_RATE = 40;
  const MID_TERM_THRESHOLD = 3;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_THRESHOLD = 7;
  const LONG_TERM_DISCOUNT = 50;

  const total = BASE_DAILY_RATE * days;

  if (days >= LONG_TERM_THRESHOLD) {
    return total - LONG_TERM_DISCOUNT;
  } else if (days >= MID_TERM_THRESHOLD) {
    return total - MID_TERM_DISCOUNT;
  } else {
    return total;
  }
}

module.exports = calculateRentalCost;
