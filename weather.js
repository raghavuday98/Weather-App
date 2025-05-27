async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "359e42097dc1bf79d6cddccc4a6b27fc";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod == 200) {
      document.getElementById("temp").innerText = `${data.main.temp}°C`;
      document.getElementById("cityValue").innerText = data.name;
      document.getElementById("Humidity").querySelector("h6").innerText = `${data.main.humidity}%`;
      document.getElementById("Wind").querySelector("h6").innerText = `${data.wind.speed} km/h`;

      const iconCode = data.weather[0].icon;
      document.getElementById("weather-icon").style.backgroundImage = `url("https://openweathermap.org/img/wn/${iconCode}@2x.png")`;
    } else {
      alert("City not found ❌");
    }
  } catch (err) {
    console.log("Error:", err);
    alert("Failed to fetch weather 😓");
  }
}
