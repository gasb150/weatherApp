(()=>{"use strict";var e={350:(e,t,i)=>{e.exports=i.p+"e3a745d916698213dbe6.gif"}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,i),a.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e=i(350);const t=async function(t=null){""===t&&(t=null);const i=document.getElementById("status"),n=document.getElementById("cityName"),r=document.getElementById("countryName"),a=document.getElementById("tempAct"),c=document.getElementById("tempFeel"),d=document.getElementById("humidity"),o=document.getElementById("desc"),s=document.getElementById("wind"),m=await async function(e=""){return await fetch("https://ipapi.co/json/",{mode:"cors"}).then((e=>e.json()))}().then((e=>e.city));null===t&&(t=m),i.innerHTML=`<div class="content"> <img  src="${e}"></img> <h1 class="title">Loading . . .</h1> </div>`;const p=await async function(e="Ontario,CA"){const t=`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=b9f735ed2467b45a05dde8fe608efd08`;return await fetch(t,{mode:"cors"}).then((e=>e.json()))}(t),u=document.getElementById("error");if(void 0!==p.message)u.innerHTML=p.message;else{n.innerHTML=p.name,r.innerHTML=p.sys.country,i.innerHTML=`<img class="" src="${function(e){const t=e.weather[0].id;let i="";return t<=232?i="https://media3.giphy.com/media/SU3SbAI9XzlGNNudLK/giphy.gif":t<=321?i="https://media1.giphy.com/media/MolmF9vdBIxgrDdmG8/giphy.gif?cid=29ff461b9t1x2e85s3k0kcem8hx5scc0zrj1ntin34zkeypw&rid=giphy.gif":t<=531?i="https://media3.giphy.com/media/hqrGXRB15iYRlLAZAF/giphy.gif?cid=29ff461b6h9k65smepryzx0um6vbhkorer9i1kj8u6l5ruve&rid=giphy.gif":t<=622?i="https://media4.giphy.com/media/Y9a12fdUgrAC6jkdlW/giphy.gif?cid=29ff461bv17ccopr32drwcn85bmtj2z633lwjl6hji9l0ufv&rid=giphy.gif":t<=781?i="https://media0.giphy.com/media/C8okPSDOWUydX9zQwC/giphy.gif":800===t?i="https://media0.giphy.com/media/MdupWSV50rFjrQQ4Eg/giphy.gif?cid=29ff461bsry8r4m80e2yi6yh5snk31hwshwh8unqaote21zi&rid=giphy.gif":t<=802?i="https://media4.giphy.com/media/4F1WfRgILk85QUh19f/giphy_s.gif?cid=ecf05e47iip46r5bljo1afeju7sqm5u62fo4yczzq4fb2wfy&rid=giphy_s.gif":t<=804&&(i="https://media3.giphy.com/media/fqhdKisO8aPdXVZKH4/giphy.gif?cid=ecf05e47rn7efxu47wvcbds0u08a9id6uw1j8o2lu6pu87d3&rid=giphy.gif"),i}(p)}"></img>`;const e=p.main.temp,t=p.main.feels_like;let m="";m=e<278.15?"carbon:temperature-frigid":e>299.15?"carbon:temperature-hot":"uil:temperature-half",a.innerHTML=` <span class="iconify" data-icon=${m} data-inline="false"></span> ${Math.round(e-273.15,-1)}°C`,c.innerHTML=` <span class="iconify" data-icon=${m} data-inline="false"></span> ${Math.round(t-273.15,-2)}°C`;const u=document.getElementById("buttonPosition");u.innerHTML="";const g=document.createElement("button");g.id="switchT",g.innerHTML="To °F",g.classList.add("button","is-link"),u.appendChild(g),function(e,t){const i=e.main.temp,n=e.main.feels_like,r=document.getElementById("tempAct"),a=document.getElementById("tempFeel");t.addEventListener("click",(()=>{"To °F"===t.innerHTML?(t.innerHTML="To °C",r.innerHTML=`${Math.round(9*i/5-459.67)}°F`,a.innerHTML=`${Math.round(9*n/5-459.67)}°F`):(r.innerHTML=`${Math.round(i-273.15,-1)}°C`,a.innerHTML=`${Math.round(n-273.15,-2)}°C`,t.innerHTML="To °F")}))}(p,g),s.innerHTML=`<span class="iconify" data-icon="tabler:wind" data-inline="false"></span> ${p.wind.speed} m/s`,d.innerHTML=`<span class="iconify" data-icon="carbon:humidity" data-inline="false"></span> ${p.main.humidity}%`,o.innerHTML=`<img src="http://openweathermap.org/img/wn/${p.weather[0].icon}.png"> </img> ${p.weather[0].description}`}};t(),document.getElementById("search").addEventListener("click",(()=>{const e=document.getElementById("cityInput").value;t(e)})),document.getElementById("cityInput").addEventListener("keypress",(e=>{if("Enter"===e.key){const e=document.getElementById("cityInput").value;t(e)}}))})()})();