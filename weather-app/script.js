//grabbing all the elements
document.addEventListener("DOMContentLoaded", () => {
  // city-input
  // get-weather-btn
  // weather-info
  // city-name
  // temperature
  // description
  // error-message

  //const input_container = document.getElementById("input-container");
  const get_weather_btn = document.getElementById("get-weather-btn");
  const city_input = document.getElementById("city-input");
  const weather_info = document.getElementById("weather-info");
  const city_name = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const error_message = document.getElementById("error-message");

  const apiKey = "c6c56a8df582cc1d500b718eb350e64a";
  // actions when get weather clicked
  get_weather_btn.addEventListener("click", async () => {
    const city = city_input.value.trim();
    if (!city) return;
    try {
      const weather_data = await fetchWeatherData(city);
      displayWeatherData(weather_data);
    } catch (error) {
      console.log(error);

      showError();
    }
  });
  //to obtain data from the api
  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url); //fetch the response from url
    console.log(typeof response);
    console.log("response :", response);
    if (!response.ok) {
      throw new Error("city not found");
    }
    const data = await response.json(); //convert to json
    return data;
  }
  //function to display the weather
  function displayWeatherData(data) {
    console.log(data);
    // const cityName = data.city.name;
    // const temp = data.list[0].main.temp;
    // const weatherDesc = data.list[0].weather[0].description;
    const { name, main, weather } = data;
    city_name.textContent = name;
    temperature.textContent = `Temperature : ${main.temp}`;
    description.textContent = `Weather : ${weather[0].description}`;
    //un hiding the display
    weather_info.classList.remove("hidden");
    error_message.classList.add("hidden");
  }

  function showError() {
    //shows error
    weather_info.classList.add("hidden");
    error_message.classList.remove("hidden");
  }
});
