(()=>{"use strict";const e=async function(e){const t=document.getElementById("cityName"),n=document.getElementById("countryName"),c=document.getElementById("tempAct"),a=document.getElementById("tempFeel"),i=document.getElementById("humidity"),d=document.getElementById("desc");e=await async function(e=""){const t=(await async function(e){return fetch("https://api.ipdata.co?api-key=dd9f35f3063168b8a589388d89bd986f97b19dfacc3624452fa47344").then((e=>e.json()))}()).ip;return await fetch(`http://ip-api.com/json/${t}`,{mode:"cors"}).then((e=>e.json()))}().then((e=>e.city)),await async function(e="Ontario,CA"){const t=`http://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=b9f735ed2467b45a05dde8fe608efd08`;return await fetch(t,{mode:"cors"}).then((e=>e.json()))}(e).then((e=>{t.innerHTML=e.name,n.innerHTML=e.sys.country,c.innerHTML=e.main.temp-273.15+"°C",a.innerHTML=`${Math.round(e.main.feels_like-273.15)}°C`,i.innerHTML=e.main.humidity,d.innerHTML=e.weather[0].description}))};e(),document.getElementById("search").addEventListener("click",(()=>{const t=document.getElementById("cityInput").value;e(t)}))})();