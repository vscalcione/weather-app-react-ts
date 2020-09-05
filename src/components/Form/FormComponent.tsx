import React from "react";
import "./FormComponent.css";
import { CustomCountryDropdown } from "../CountryList/CountryListComponent";

const Form = (props: any) => {
  return (
    <div className="container h-100">
      <form onSubmit={props.loadweather}>
        <div>{props.error ? Error() : ""}</div>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="on"
            />
          </div>
          <div className="col-md-3">
            <CustomCountryDropdown />
            {/*<input type="text" className="form-control" placeholder="Country" name="country" autoComplete="on" />*/}
          </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button
              style={{ marginLeft: 120, marginTop: 20 }}
              className="btn btn-warning"
            >
              Get Weather
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
