//your JS code here. If required.
document.getElementById('weatherButton').addEventListener('click', function() {
  // Send a GET request to the OpenWeatherMap API
  fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=55835c942984df70bed1271a457a7931')
	.then(response => response.json())
	.then(data => {
	  // Extract and format the weather data
	  var weatherDescription = data.weather[0].description;
	  var message = 'Current weather in London: '+weatherDescription;
	  // Update the weatherData div with the weather information
	  document.getElementById('weatherData').textContent = message;
	})
	.catch(error => console.log(error)); // Handle any errors that occur during the fetch request

});