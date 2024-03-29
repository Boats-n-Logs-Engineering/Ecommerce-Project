///////////////////////////////////////////////////////////////////////////////
// User Cart
///////////////////////////////////////////////////////////////////////////////
const userCart = [];


function getNumUserItems() {
  if (userCart.length === 0) return 0;
  return userCart.reduce((acc, cur) => acc + cur.quantity, 0);
}

module.exports = { userCart, getNumUserItems };