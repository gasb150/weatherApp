// import load from './load'


import getInfo from './apiWeather'
import location from './apiLocation'
import stickers from './stickers'

import * as imgUrl from '../src/icons/load.gif'
const loadPage = (() => {
    console.log()
    async function load(cityInput=null) {
        if (cityInput === '') {
            cityInput = null
        }
        const status = document.getElementById('status')
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
       
       status.innerHTML = `<div class="content"> <img  src="${imgUrl.default}"></img> <h1 class="title">Loading . . .</h1> </div>`
        const data = await getInfo(cityInput)
        const divError = document.getElementById('error')
        if (data.message != undefined){
            divError.innerHTML = data.message
           
        } else {
        cityName.innerHTML = data.name
        countryName.innerHTML = data.sys.country
        let tempImg = ''
        status.innerHTML = `<img class="" src="${stickers(data)}"></img>`

        const tempValue = data.main.temp
       
        const tempFeelValue = data.main.feels_like

        


        temp.innerHTML = `${Math.round( tempValue - 273.15, -1)}°C`
        tempFeel.innerHTML = `${Math.round( tempFeelValue - 273.15, -2)}°C`
        // <button id="switchT" class="button is-link">°F</button>
        const infoDisplayed = document.getElementById('buttonPosition')
        infoDisplayed.innerHTML = ''
        const switchT = document.createElement('button')
        switchT.id="switchT"
        switchT.innerHTML="°F"
        switchT.classList.add("button", "is-link")
        infoDisplayed.appendChild(switchT)

        switchTemperature(data, switchT)
        

        wind.innerHTML = `${data.wind.speed} m/s`
        humidity.innerHTML = `${data.main.humidity}%`
        desc.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"> </img> ${data.weather[0].description}`
   
        }
        
    
 } return {
        load
    };
})()


loadPage.load()

const searchBtn = document.getElementById('search')

searchBtn.addEventListener("click", () =>{
    const cityInput = document.getElementById('cityInput').value
 
    loadPage.load(cityInput)
    
  
})

function switchTemperature(data){

    const tempValue = data.main.temp
    const tempFeelValue = data.main.feels_like
    
    const temp = document.getElementById('tempAct')
    const tempFeel = document.getElementById('tempFeel')
        switchT.addEventListener("click", () =>{
            console.log(switchT.innerHTML)

            if(switchT.innerHTML === '°F'){
                switchT.innerHTML = '°C'
              
                console.log('yyy')
                temp.innerHTML = `${Math.round( tempValue*9/5 -459.67 )}°F`
                tempFeel.innerHTML = `${Math.round( tempFeelValue*9/5 -459.67  )}°F`
              
            } else {
               console.log('kkk')
                temp.innerHTML = `${Math.round( tempValue - 273.15, -1)}°C`
                tempFeel.innerHTML = `${Math.round( tempFeelValue - 273.15, -2)}°C`
                switchT.innerHTML = '°F'
            }
        
        
        })
}



