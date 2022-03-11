import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Coin from './Coin.js'





function App() {
  const [coins, setCoins] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect( () => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
      }).catch(err => console.log(err));
  }, [])

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  
  return (
    <div className='App'>
      <div className="search">
        <h1 className="searchTitle">Search for a currency:</h1>
        <form>
          <input className="input" type="text" placeholder="Search" onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;
