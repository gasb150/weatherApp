export default async function getInfoByLocation(cityIp='') {
    let apiKey = 'dd9f35f3063168b8a589388d89bd986f97b19dfacc3624452fa47344';
    const locResponse = await fjson(`https://api.ipdata.co?api-key=${apiKey}`)
    const ip = locResponse.ip
    const response = await fetch (`http://ip-api.com/json/${ip}`, {mode: 'cors'}).then(response => response.json())
  
    return response
}


async function fjson(url) {
    return fetch(url).then(res => res.json());
  }
