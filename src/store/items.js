let initialState= {
  productList: [
    { name: 'battery', category: 'electronics', description: 'a description', price: 0.99, inventoryCount: 10 },
    { name: 'phone charger', category: 'electronics', description: 'a description', price: 5.50, inventoryCount: 2 },
    { name: 'apple', category: 'produce', description: 'a description', price: 1.50, inventoryCount: 50 },
    { name: 'banana', category: 'produce', description: 'a description', price: .50, inventoryCount: 12 },
    { name: 'lettuce', category: 'produce', description: 'a description', price: 2.49, inventoryCount: 15 },
    { name: 'cucumber', category: 'produce', description: 'a description', price: 0.05, inventoryCount: 5 },
  ],
  activeList: []
};

function productReducer(state = initialState, action) {

  let { type, payload } = action;
  let { productList, activeList } = state;

  switch(type) {
    case 'UPDATE_ACTIVE_CATEGORY':
      activeList = productList.filter(item => item.category === payload);
      return {productList, activeList};
    case 'ADD_ITEM_TO_CART':
      productList = productList.map(product => {
        if (product.name === payload) return {...product, inventoryCount: product.inventoryCount - 1};
        else return product;
      });
      activeList = productList.filter(item => item.category === payload);
      return {productList, activeList};
    case 'REMOVE_ITEM_FROM_CART':
      productList = productList.map(product => {
        if (product.name === payload) return {...product, inventoryCount: product.inventoryCount + 1};
        else return product;
      });
      activeList = productList.filter(item => item.category === payload);
      return {productList, activeList};
    case 'RESET_CART':
      return initialState;
    default:
      return state;
  }
}

export default productReducer;
