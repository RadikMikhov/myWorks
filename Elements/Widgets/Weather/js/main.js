fetch("https://api.openweathermap.org/data/2.5/weather?q=Kyiv,UA&appid=c6a8315c10381f1534f4ee5eb5c16e4e")
    .then(response => {return response.json()})
    .then(data => {
        console.log(data)
        document.querySelector('.city').textContent = data.name;
        document.querySelector('.description').textContent = data.weather[0]['description'];
        document.querySelector('.temp').innerHTML = (data.main.temp - 273).toFixed() + "&deg;";
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + data.weather[0]['icon'] + '@2x.png'

    })
    .catch(err => {
        console.log(err)
    })