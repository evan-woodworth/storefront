let initialState= {
  cartList: {},
  totalItems: 0,
};

function cartReducer(state = initialState, action) {

  let { type, payload } = action;
  let { cartList, totalItems } = state;

  switch(type) {
    case 'ADD_ITEM_TO_CART':
      if (payload in cartList) {
        cartList[payload] = cartList[payload] + 1;
      } else {
        cartList[payload] = 1;
      }
      totalItems++;
      return {cartList, totalItems};
    case 'REMOVE_ITEM_FROM_CART':
      if ( cartList[payload] === 1 ) delete cartList[payload];
      else cartList[payload] = cartList[payload] - 1;
      totalItems--;
      return {cartList, totalItems}
    case 'RESET_CART':
      return initialState;
    default:
      return state;
  }
}

export default cartReducer;
