import React from "react";

const Weather = (props: any) => {
  return (
    <div className="container text-ligth">
      <div className="Card">
        <h1 className="text-white py-3">{props.cityname}</h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`}></i>
        </h5>

        {/* Get celsius */}
        {props.temp_celsius ? (
          <h1 className="py-2">{props.temp_celsius}&deg;</h1>
        ) : null}

        {/* show max and min temp */}
        {maxminTemp(props.temp_min, props.temp_max)}

        {/* Weather description */}
        <h4 className="py-3">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>
  );
};

const maxminTemp = (min: any, max: any) => {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">Min Temp: {min}&deg;</span>
        <span className="px-4">Max Temp: {max}&deg;</span>
      </h3>
    );
  }
};

export default Weather;
