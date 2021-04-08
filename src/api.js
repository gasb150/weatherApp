export default async function getInfo (cityName="Ontario,CA") {
       const key = 'b9f735ed2467b45a05dde8fe608efd08'
       const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${key}`
    const response = await fetch(url, {mode: 'cors'}).then(response=> response.json())
    console.log(response)
    //  .then((response)=> {
    //     // console.log(response)
    //     // let cityName=response.name
    //     // console.log(response.main.temp)
    //     // console.log(response.main.temp_min)
    //     // console.log(response.main.temp_max)
    //     // console.log(response.main.feels_like)
    //     // console.log(response.weather[0].description)
    //     // console.log(response.wind.speed)

    //     // console.log(response.sys.country)
        // console.log(response)
        return response
     

}

