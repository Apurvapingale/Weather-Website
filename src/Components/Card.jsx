import React from "react";
import "./Card.css";
import { Component } from "react";
import { GoLocation } from "react-icons/fa";

function Card(props) {
  const {
    city,
    lat,
    lon,
    temp_min,
    temp_max,
    temp,
    desc,
  } = props;
  let date = Date();
  date =
    date.split(" ")[1] + " " + date.split(" ")[2] + " " + date.split(" ")[3];
  return (
    <div className="card ">
      <div className="card-head">
        <div className="card-head-place">
          <h3>{city}</h3>
        </div>
        <div className="card-head-time">{date}</div>
      </div>
      <div className="card-body">
        <div className="card-body-temperature">
          {Math.round(temp - 273.5)}
          &deg;C
        </div>
        <div className="card-body-visibility">{desc}</div>
      </div>

      <div className="card-footer">
        <div className="temp">
          <div className="min">
            <h5>Min-Temp: &nbsp;</h5>
            <div className="min-temp">{Math.round(temp_min - 273.5)}&deg;C</div>
          </div>
          <div className="max">
            <h5 className="title">Max-Temp: &nbsp;</h5>
            <div className="max-temp">{Math.round(temp_max - 273.5)}&deg;C</div>
          </div>
        </div>
        <div className="lat-lon">
          <div className="lat">
            <h5>Latitude: &nbsp;</h5>
            <span>{lat}</span>
          </div>
          <div className="lon">
            {" "}
            <h5>Longitude:&nbsp;</h5>
            <span> {lon}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
