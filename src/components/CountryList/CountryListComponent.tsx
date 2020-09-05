import React, { Component } from "react";
import "./CountryListComponent.css";
import { CountryDropdown } from "react-country-region-selector";

export class CustomCountryDropdown extends Component {
  constructor(props: any) {
    super(props);
    this.state = { country: "", region: "" };
  }

  selectCountry(val: any) {
    this.setState({ country: val });
  }

  selectRegion(val: any) {
    this.setState({ region: val });
  }

  render() {
    const country: any = this.state;
    return (
      <div>
        <CountryDropdown
          classes="custom-select"
          value={country}
          onChange={(val) => this.selectCountry(val)}
          name="country"
        />
      </div>
    );
  }
}

/*import React, { Component } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'
 
export default class CountrySelector extends Component {
  constructor(props) {
    super(props)
 
    this.options = countryList().getData()
 
    this.state = {
      options: this.options,
      value: null,
    }
  }
 
  changeHandler = value => {
    this.setState({ value })
  }
 
  render() {
    return (
      <Select
        name="country" 
        options={this.state.options}
        value={this.state.value}
        onChange={this.changeHandler}
      />
    )
  }
}
*/
