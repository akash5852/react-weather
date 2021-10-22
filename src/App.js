import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';



function App() {
  const [q, setq] = useState('');
  const [data, setData] = useState('');
  const day = { Temp: "", Description: "" };

  const getWeather = async () => {
    try {
      const res = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=436752e99bf23ca9371cac6b0b58dd9c`);
      console.log(res);
      day.Temp = res.data.main.temp;
      day.Description = res.data.weather[0].description;
      setData(day);
    } catch (e) {
      console.log(e);
    }

  };

  return (
    <div>
      <input id="s" name="searchBar" className="search" onChange={event => setq(event.target.value)}></input>
      <h1>{q}</h1>
      <h2>{data.Temp}</h2>
      <h2>{data.Description}</h2>
      <button onClick={getWeather}></button>
    </div >
  );
}

export default App;
