import React from 'react';
import { connect } from 'react-redux';

function Products(props) {
  return (
    <div className="Products">
      <ul>
      {props.products.activeList.map((product, idx) => {
        return (
          <li>
            {product?.price ? 
              `${product.name}: $${product.price}`
              : `${product.name}` 
            }
          </li>
        )
      })}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products,
  }
}

const mapDispatchToProps = dispatch => ({
  changeCategory: (name) => dispatch({type: 'UPDATE_ACTIVE_CATEGORY', payload: name})
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
