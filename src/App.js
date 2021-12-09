import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Categories from './components/storefront/categories';
import Products from './components/storefront/products';
import Cart from './components/cart/simplecart'
import Grid from '@mui/material/Grid';

function App(props) {
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item xs={12}><Header /></Grid>
        <Grid item xs={12}><Categories /></Grid>
        <Grid item xs={8}><Products /></Grid>
        <Grid item xs={4}><Cart /></Grid>
        <Grid item xs={12}><Footer /></Grid>
      </Grid>
    </div>
  );
}

export default App;
