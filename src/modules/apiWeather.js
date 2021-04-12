
export default async function getInfo(cityName = 'Ontario,CA') {
  const key = 'b9f735ed2467b45a05dde8fe608efd08';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${key}`;
  const response = await fetch(url, { mode: 'cors' }).then(response => response.json());

  return response;
}
