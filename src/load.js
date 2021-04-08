import getInfo from './api'

const loadPage = (() => {
    async function load() {
        const cityName = document.getElementById('cityName')
        const countryName = document.getElementById('countryName')
        const temp = document.getElementById('tempAct')
        const tempFeel = document.getElementById('tempFeel')
        const humidity = document.getElementById('humidity')
        const desc = document.getElementById('desc')

        const data = await getInfo().then((response => {
            cityName.innerHTML = response.name
            countryName.innerHTML = response.sys.country
            temp.innerHTML = response.main.temp
            tempFeel.innerHTML = response.main.feels_like
            humidity.innerHTML = response.main.humidity
            desc.innerHTML = response.weather[0].description
    
        }))
    } return {
        load
    };
})()

export default loadPage