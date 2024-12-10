  const CityName = document.querySelector("#cityName")
  const InputCity = document.querySelector("#inputCity")
  const Tamprature = document.querySelector("#tamprature")
  const Description = document.querySelector("#description")
  const ErrorMassage = document.querySelector("#errorMassage")
  const ShowResultContainer = document.querySelector("#showResult-Container")

  document.querySelector("#showResult").addEventListener('click', async () => {
    const city = InputCity.value.trim()
    if(!city) return
    try {
      const weatherdata = await weather(city)
      showWeather(weatherdata)
      InputCity.value=''
    } catch (error) {
      Errorhandler()
    }
  })

  async function weather(city) {
    const API_KEY='971445e1a52fa558b580fcdca1da04f6'    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url)
    // console.log(response)
    if (!response.ok) {
      throw new error('Error Responce')
    }
    const data = await response.json()
    return data
  }
  async function showWeather(data) {
    console.log(data)
    const { name, main, weather } = data;
    CityName.textContent = name
    Tamprature.textContent = `Temperature : ${main.temp}`
    Description.textContent = `Weather : ${weather[0].description}`

    ShowResultContainer.classList.remove("hidden");
    ErrorMassage.classList.add("hidden");
  }

  async function Errorhandler() {

    ShowResultContainer.classList.remove("hidden");
    ErrorMassage.classList.add("hidden");

  }
