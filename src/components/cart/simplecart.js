import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


function SimpleCart(props) {
  return (
    <div>
      <p>Cart ({props.cart.totalItems})</p>
      {props.cart.totalItems ?
        <>
          <List dense={true}>
            {Object.entries(props.cart.cartList).map((product, idx) => {
              return (
                <ListItem key={idx}
                  secondaryAction={
                    <Button 
                    sx={{ textAlign: 'left' }}
                    onClick={() => props.removeItemFromCart(product[0])}
                    >Remove 1</Button>
                  }>
                  <ListItemText 
                    sx={{ textAlign: 'center' }}
                    primary={`${product[0]}: ${product[1]}`} />
                </ListItem>
              )
            })}
          </List>
          <Button onClick={() => props.emptyCart()}>Empty Cart</Button>
        </> : <></>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart,
  }
}

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: (name) => dispatch({type: 'REMOVE_ITEM_FROM_CART', payload: name}),
  emptyCart: () => dispatch({type: 'RESET_CART', payload: ''})
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);