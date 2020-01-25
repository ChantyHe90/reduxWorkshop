import React, { Component } from "react";
// openwaetherKeyApi
import { connect } from "react-redux";
import { getWeatherData } from "./weatherAction";
class Weather extends Component {
  constructor() {
    super();
    this.state = {
      city: ""
    };
  }
  //   componentDidMount() {
  //     this.props.getWeatherData();
  //   }
  inputHandler = e => {
    this.setState({
      city: e.target.value
    });
  };
  clickHandler = () => {
    this.props.getWeatherData(this.state.city);
    // gets API for city xy > weatherAction
  };
  render() {
    console.log("weather", this.props);
    return (
      <div>
        <input
          type="text"
          value={this.state.city}
          onChange={this.inputHandler}
        />
        <button onClick={this.clickHandler}>get weather</button>
        <h1>Weather in:</h1>
        <h1>{this.props.name}</h1>
        <h1>{this.props.mainWeather && this.props.mainWeather.temp}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // weather: state
  name: state.weatherReducer.weatherData.name,
  mainWeather: state.weatherReducer.weatherData.main
});

export default connect(mapStateToProps, { getWeatherData })(Weather);
