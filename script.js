

fetch('https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key'}
.then(response => response.json())
        .then(data => {


            fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key'}
})
