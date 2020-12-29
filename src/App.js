import './App.css';
import { useState, useEffect } from 'react'
import { Items, Navbar } from './components';

import { commerce } from './_lib/commerce';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
    console.log('mounted')
  }, []);

  const fetchItems = async () => {
    const { data } = await commerce.products.list();
    setItems(data);
  }
  
  console.log('from commerce js: ', items)

  return (
    <div className="App">
      <Navbar />
      <Items items={items}/>
    </div>
  );
}

export default App;
