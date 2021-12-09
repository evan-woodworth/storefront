import { React } from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Products(props) {
  return (
    <div className="Products">
      <h2>Products</h2>
      { props.products.activeList.length ? 
        <List dense={true}>
          {props.products.activeList.map((product, idx) => {
            return (
              <ListItem key={idx}
                secondaryAction={
                  <>
                    {product.inventoryCount ? 
                      <Button 
                        sx={{ textAlign: 'left' }}
                        onClick={() => props.addItemToCart(product.name)}
                        >Add to Cart
                      </Button> :
                      <Button sx={{ textAlign: 'left' }}>Out of Stock</Button>
                    }
                  </>
                }>
                <ListItemText 
                  sx={{ textAlign: 'center' }}
                  primary={`${product.name}: $${product.price} In Stock: ${product.inventoryCount}`} />
              </ListItem>
            )
          })}
        </List> :
        <>Choose a Category.</>
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: (name) => dispatch({type: 'ADD_ITEM_TO_CART', payload: name})
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
