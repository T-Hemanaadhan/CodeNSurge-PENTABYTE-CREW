const weatherApiKey = "YOUR_WEATHER_API_KEY";
const stockApiKey = "YOUR_STOCK_API_KEY";

async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;
    try {
        const response = await axios.get(url);
        const data = response.data;

        document.getElementById("location").textContent = data.name;
        document.getElementById("temperature").textContent = `${data.main.temp} °C`;
        document.getElementById("description").textContent = data.weather[0].description;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

async function fetchStockData(symbol) {
    const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1min&apikey=${stockApiKey}`; // Replace with your stock API URL
    try {
        const response = await axios.get(url);
        const data = response.data;

        document.getElementById("stock-symbol").textContent = symbol;
        document.getElementById("stock-price").textContent = `$${data.values[0].close}`;
    } catch (error) {
        console.error("Error fetching stock data:", error);
    }
}

fetchWeatherData("Chennai");
fetchStockData("AAPL");

setInterval(() => {
    fetchWeatherData("Chennai");
    fetchStockData("AAPL");
}, 60000);
