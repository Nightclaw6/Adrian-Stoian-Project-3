import React from 'react'
import './App.css';

const Coin = ({ name, symbol, image, price, volume, priceChange, marketcap }) => {
  return (
    <div className="coinContainer">
        <div className="coinRow">
            <div className="coin">
                <img src={image} alt="crypto" />
                <h1>{name}</h1>
                <p className="symbol">{symbol}</p>
            </div>
            <div className="coinData">
                <p className="coinPrice"><span>Price: ${price}</span></p>
                <p className="coinVolume"><span>Volume: ${volume.toLocaleString()}</span></p>
                
                {priceChange < 0 ? (<p className="coinPercentage red">Change: {priceChange.toFixed(2)}%</p>) : (<p className="coinPercentage green">Change: {priceChange.toFixed(2)}%</p>)}
                
                <p className="coinMarketCap"><span>Mkt.Cap: ${marketcap.toLocaleString()}</span></p> 
            </div>
        </div>
    </div>
  );
};

export default Coin;