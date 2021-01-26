import './App.css';
import { useState, useEffect } from 'react'
import { Items, Navbar, Cart } from './components';
import { commerce } from './_lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [items, setItems] = useState([]); // home page use
  const [carts, setCarts] = useState({}); // use for add to carts

  useEffect(() => {
    fetchItems()
    fetchCarts()
  }, []);

  // initial fetch for home
  const fetchItems = async () => {
    const { data } = await commerce.products.list();
    setItems(data);
  }

  // fetch whatever we have in commerce cart
  const fetchCarts = async () => { 
    setCarts(await commerce.cart.retrieve());
  }

  // add into cart
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCarts(item.cart)
  }

  const handleUpdateCartQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity })

    setCarts(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId)

    setCarts(cart)
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCarts(cart);
  }

  // const handle
  console.log('what is items:', items )
  console.log('what is carts:', carts )

  return (
    <Router>
      <div className="App">
        <Navbar totalItems={carts.total_items} />
          <Switch>
            <Route exact path="/">
              <Items 
                items={items} 
                handleAddToCart={handleAddToCart}
              />
            </Route>
            <Route exact path="/cart">
              <Cart 
                cart={carts}
                handleEmptyCart={handleEmptyCart}
                handleUpdateCartQuantity={handleUpdateCartQuantity}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;