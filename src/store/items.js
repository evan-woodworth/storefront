let initialState= {
  productList: [
    { name: 'battery', category: 'electronics', description: 'a description', price: 0.99, inventoryCount: 10 },
    { name: 'phone charger', category: 'electronics', description: 'a description', price: 5.50, inventoryCount: 2 },
    { name: 'apple', category: 'produce', description: 'a description', price: 1.50, inventoryCount: 50 },
    { name: 'banana', category: 'produce', description: 'a description', price: .50, inventoryCount: 12 },
    { name: 'lettuce', category: 'produce', description: 'a description', price: 2.49, inventoryCount: 15 },
    { name: 'cucumber', category: 'produce', description: 'a description', price: 0.05, inventoryCount: 5 },
  ],
  activeList: [{name:'Choose a Category.'}]
};

function productReducer(state = initialState, action) {

  let { type, payload } = action;

  switch(type) {
    case 'UPDATE_ACTIVE_CATEGORY':
      let {productList} = state
      let activeList = productList.filter(item => item.category === payload);
      return {productList, activeList};
    default:
      return state;
  }
}

export default productReducer;
