import React from 'react'

const Coin = ({ name, symbol, image, price, volume }) => {
  return (
    <div className="coinContainer">
        <div className="coinRow">
            <div className="coin">
                <img src={image} alt="crypto" />
                <h1>{name}</h1>
                <p className="symbol">{symbol}</p>
            </div>
            <div className="coinData">
                <p className="coinPrice">${price}</p>
                <p className="volume">${volume.toLocaleString()}</p>
            </div>
        </div>
    </div>
  );
};

export default Coin;