import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Categories from './components/storefront/categories';
import Products from './components/storefront/products';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
