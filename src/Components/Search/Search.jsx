import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./Search.css";

function Search() {
  const [city, setCity] = useState("");
  const [cityDetails, setCityDetails] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const cityRef = React.useRef();

  const handleCityAction = async (event) => {
    event.preventDefault();
    const city = cityRef.current.value;
    await axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=fe8f1a45d1be1b1bcadd251288d7eacd`
      )
      .then(async (data) => {
        console.log(data.data);
        setCityDetails([data.data, ...cityDetails]);
        await axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${data.data[0]?.lat}&lon=${data.data[0]?.lon}&appid=fe8f1a45d1be1b1bcadd251288d7eacd`
          )
          .then((data) => setWeatherData([data.data, ...weatherData]))
          .catch((err) => console.log("err", err));
      })
      .catch((err) => console.log("err", err));
  };
  console.log(cityDetails);
  useEffect(() => {
    console.log({ weatherData, cityDetails });
  }, [weatherData, cityDetails]);

  return (
    <>
      <div>
        <div className="search">
          <input
            className="search-bar"
            type="text"
            placeholder="Search Weather of your city"
            ref={cityRef}
          />
          <button className="btn" onClick={handleCityAction}>
            search
          </button>
        </div>
        {weatherData.map((data, index) => (
          
          <Card
            key={index}
            title=""
            city={cityDetails[index][0]?.name}
            lat={data?.coord?.lat}
            lon={data?.coord?.lon}
            temp={data?.main?.temp}
            temp_min={data?.main?.temp_min}
            temp_max={data?.main?.temp_max}
            main={data?.weather?.main}
            desc={data?.weather[0]?.description}
          />
        ))}

       
        
      </div>{" "}
    </>
  );
}

export default Search;
