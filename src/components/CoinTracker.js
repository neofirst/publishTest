import {useState, useEffect} from 'react';

const ConinTracker = () =>{
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=>response.json())
    .then((json) => {
      setCoins(json);
      setLoding(false);
    });
  },[])

  return(
    <div>
      <h1>The coins {loading ? "" : `(${coins.length})`}</h1>
      <select>
        {coins.map((coin, index) =>(
          <option key={index}>{coin.name}</option>
        ))}
      </select>
    </div>
  )
}

export default ConinTracker;