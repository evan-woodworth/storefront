let initialState= {
  categoryList: [
    { name: 'electronics', displayName: 'ELECTRONICS', description: 'a description' },
    { name: 'produce', displayName: 'PRODUCE', description: 'a description' },
  ],
  activeCategory: 'electronics'
};

function categoryReducer(state = initialState, action) {

  let { type, payload } = action;

  switch(type) {
    case 'UPDATE_ACTIVE_CATEGORY':
      state.activeCategory = payload;

      return state;
    default:
      return state;
  }
}

export default categoryReducer;
