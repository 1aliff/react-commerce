import './App.css';
import { useState, useEffect } from 'react'
import { Items, Navbar, Cart } from './components';
import { commerce } from './_lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [items, setItems] = useState([]);
  const [carts, setCarts] = useState({});

  useEffect(() => {
    fetchItems()
    fetchCarts()
  }, []);

  const fetchItems = async () => {
    const { data } = await commerce.products.list();
    setItems(data);
  }

  const fetchCarts = async () => setCarts(await commerce.cart.retrieve());

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCarts(item.cart)
  }

  console.log('what is items:', items )
  console.log('what is carts:', carts )

  return (
    <Router>
      <div className="App">
        <Navbar totalItems={carts.total_items} />
          <Switch>
            <Route exact path="/">
              <Items items={items} handleAddToCart={handleAddToCart}/>
            </Route>
            <Route exact path="/cart">
              <Cart cart={carts}/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;