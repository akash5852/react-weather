import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  const [q, setq] = useState('');
  const [data, setData] = useState('');
  const day = { Name: "", Temp: "", Description: "" };
  //enter an appId
  const appId = '';

  const getWeather = async () => {
    try {
      const res = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appId}`);
      console.log(res);
      day.Name = res.data.name;
      day.Temp = res.data.main.temp + " °C";
      day.Description = res.data.weather[0].description;
      setData(day);
    } catch (e) {
      console.log(e);
    }

  };

  return (
    <div max-width>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="https://cms-assets.tutsplus.com/uploads/users/16/posts/30551/preview_image/cloud400.png" alt="Weather Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
            React Weather
          </a>
        </div>
      </nav>

      <div className="input-group w-10 p-3">
        <input id="s" name="searchBar" type="text" className="form-control" onChange={event => setq(event.target.value)} height="16" placeholder="Enter a city name" aria-label="City name" aria-describedby="button-addon2"></input>
        <button id="b" name="buttonWeather" className="btn btn-outline-secondary" onClick={getWeather} type="button" id="button-addon2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg>
        </button>
      </div>

      <div className="card border-success mb-3 mx-auto" style={{ width: '18rem' }}>
        <div className="card-header bg-transparent border-success text-center">{data.Name}</div>
        <div className="card-body text-success text-center">
          <p className="card-text text-center">{data.Temp}</p>
        </div>
        <div className="card-footer bg-transparent border-success text-center">{data.Description}</div>
      </div>


    </div >
  );
}

export default App;
