import React from 'react';
import './App.css';
import Titles from './Components/titles.js';
import Form from './Components/form.js';
import Weather from './Components/weather.js';

const theKEY = "a1ce29ff02bbac9a78e2ef911a568a54";

class App extends React.Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: ""
  }

  getWeather = async (e) => {
    e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${theKEY}&units=metric`);
      const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please enter both the city and country into the inputs."
      });
    }
  }

  render(){
    return(
        <div className="wrap-all-items">
          
          <div>
            <Titles />
          </div>
          
          <div>
            <Form getWeather={this.getWeather} />
              
            <Weather
              temperature={this.state.temperature}
              humidity={this.state.humidity}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              error={this.state.error}
            />

          </div>
        </div>
         );
  }
};

export default App;