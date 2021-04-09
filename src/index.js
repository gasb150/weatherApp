// import load from './load'


import getInfo from './apiWeather'
import location from './apiLocation'
const loadPage = (() => {
    
    async function load(cityInput=null) {
        const cityName = document.getElementById('cityName')
        const countryName = document.getElementById('countryName')
        const temp = document.getElementById('tempAct')
        const tempFeel = document.getElementById('tempFeel')
        const humidity = document.getElementById('humidity')
        const desc = document.getElementById('desc')
        const wind = document.getElementById('wind')

        const locData = await location().then((response=>{
            const cityName = response.city
            return cityName
        }))
       if (cityInput ===null){
        cityInput = locData
       }
        const data = await getInfo(cityInput).then((response => {
            cityName.innerHTML = response.name
            countryName.innerHTML = response.sys.country
            temp.innerHTML = `${Math.round(response.main.temp - 273.15, -2)}°C`
            tempFeel.innerHTML = `${Math.round(response.main.feels_like - 273.15, -2)}°C`
            wind.innerHTML = `${response.wind.speed} m/s`
            humidity.innerHTML = `${response.main.humidity}%`
            desc.innerHTML = response.weather[0].description
    
        }
        ))
      
    }
     return {
        load
    };
})()


loadPage.load()

const searchBtn = document.getElementById('search')

searchBtn.addEventListener("click", () =>{
    const cityInput = document.getElementById('cityInput').value
    console.log(cityInput)
    loadPage.load(cityInput)
    
  
})