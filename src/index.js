// import load from './load'


import getInfo from './apiWeather'
import location from './apiLocation'
const loadPage = (() => {
    
    async function load(cityInput) {
        const cityName = document.getElementById('cityName')
        const countryName = document.getElementById('countryName')
        const temp = document.getElementById('tempAct')
        const tempFeel = document.getElementById('tempFeel')
        const humidity = document.getElementById('humidity')
        const desc = document.getElementById('desc')
        
        const locData = await location().then((response=>{
            const cityName = response.city
            return cityName
        }))

        cityInput = locData
        const data = await getInfo(cityInput).then((response => {
            cityName.innerHTML = response.name
            countryName.innerHTML = response.sys.country
            temp.innerHTML = `${response.main.temp - 273.15}°C`
            tempFeel.innerHTML = `${Math.round(response.main.feels_like - 273.15)}°C`
            humidity.innerHTML = response.main.humidity
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
    loadPage.load(cityInput)
  
})