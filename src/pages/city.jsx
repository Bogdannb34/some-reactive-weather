import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const weatherApi = {
  clientId: "JXghxk1gBBHqi4OqKOb8P",
  clientSecret: "MysHXGMgQhVT52EEO1IPv42NTn5NF2uzXPUnwi9x",
};

const City = () => {
  const { city, country } = useParams();
  const [weather, setWeather] = useState();

  const getWeather = async (city, country) => {
    const weatherUrl = `https://api.aerisapi.com/conditions/summary/${city},${country}?format=json&client_id=${weatherApi.clientId}&client_secret=${weatherApi.clientSecret}`;
    const response = await fetch(weatherUrl);
    const cityResponse = await response.json();
    Object.entries(cityResponse.response[0].periods[0]).forEach(
      ([key, value]) => {
        if (key === "feelslike") {
          setWeather(value);
        }
      }
    );
  };

  useEffect(() => {
    getWeather(city, country);
  }, [city, country]);

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "75vh" }}
    >
      {weather && (
        <div
          className="card text-center h-50 shadow bg-body rounded"
          style={{ width: "20rem", zIndex: "-1" }}
        >
          <div className="card-header">
            <h5 className="card-title text-info text-uppercase">{city}</h5>
          </div>
          <h5 className="text-danger mt-1">Temperature</h5>
          <div className="card-body d-flex justify-content-around align-items-center flex-wrap">
            <h3 className="text-info border border-info rounded shadow bg-body p-1">
              <span className="text-info">&#8964;</span>
              {weather.minC} &#8451;
            </h3>
            <h3 className="text-danger border border-danger rounded shadow bg-body p-1">
              <span>&#8963;</span>
              {weather.maxC} &#8451;
            </h3>
            <h3 className="text-success border border-success rounded shadow bg-body p-1">
              <span>&#8770;&nbsp;</span>
              {weather.avgC} &#8451;
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default City;
