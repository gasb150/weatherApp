(()=>{"use strict";var e={350:(e,t,i)=>{e.exports=i.p+"e3a745d916698213dbe6.gif"}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,i),c.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{function e(e){status=e.weather[0].id;let t="";return status<=232?t="https://media3.giphy.com/media/SU3SbAI9XzlGNNudLK/giphy.gif":status<=321?t="https://media1.giphy.com/media/MolmF9vdBIxgrDdmG8/giphy.gif?cid=29ff461b9t1x2e85s3k0kcem8hx5scc0zrj1ntin34zkeypw&rid=giphy.gif":status<=531?t="https://media3.giphy.com/media/hqrGXRB15iYRlLAZAF/giphy.gif?cid=29ff461b6h9k65smepryzx0um6vbhkorer9i1kj8u6l5ruve&rid=giphy.gif":status<=622?t="https://media4.giphy.com/media/Y9a12fdUgrAC6jkdlW/giphy.gif?cid=29ff461bv17ccopr32drwcn85bmtj2z633lwjl6hji9l0ufv&rid=giphy.gif":status<=781?t="https://media0.giphy.com/media/C8okPSDOWUydX9zQwC/giphy.gif":800===status?t="https://media0.giphy.com/media/MdupWSV50rFjrQQ4Eg/giphy.gif?cid=29ff461bsry8r4m80e2yi6yh5snk31hwshwh8unqaote21zi&rid=giphy.gif":status<=802?t="https://media4.giphy.com/media/4F1WfRgILk85QUh19f/giphy_s.gif?cid=ecf05e47iip46r5bljo1afeju7sqm5u62fo4yczzq4fb2wfy&rid=giphy_s.gif":status<=804&&(t="https://media3.giphy.com/media/fqhdKisO8aPdXVZKH4/giphy.gif?cid=ecf05e47rn7efxu47wvcbds0u08a9id6uw1j8o2lu6pu87d3&rid=giphy.gif"),console.log(status),t}var t=i(350);const n=(console.log(),{load:async function(i=null){""===i&&(i=null);const n=document.getElementById("status"),c=document.getElementById("cityName"),o=document.getElementById("countryName"),s=document.getElementById("tempAct"),d=document.getElementById("tempFeel"),a=document.getElementById("humidity"),m=document.getElementById("desc"),h=document.getElementById("wind"),u=await async function(e=""){const t=(await async function(e){return fetch("https://api.ipdata.co?api-key=dd9f35f3063168b8a589388d89bd986f97b19dfacc3624452fa47344").then((e=>e.json()))}()).ip;return await fetch(`http://ip-api.com/json/${t}`,{mode:"cors"}).then((e=>e.json()))}().then((e=>e.city));null===i&&(i=u),n.innerHTML=`<div class="content"> <img  src="${t}"></img> <h1 class="title">Loading . . .</h1> </div>`;const g=await async function(e="Ontario,CA"){const t=`http://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=b9f735ed2467b45a05dde8fe608efd08`;return await fetch(t,{mode:"cors"}).then((e=>e.json()))}(i),p=document.getElementById("error");if(null!=g.message)p.innerHTML=g.message;else{c.innerHTML=g.name,o.innerHTML=g.sys.country,n.innerHTML=`<img class="" src="${e(g)}"></img>`;const t=g.main.temp,i=g.main.feels_like;s.innerHTML=`${Math.round(t-273.15,-1)}°C`,d.innerHTML=`${Math.round(i-273.15,-2)}°C`;const u=document.getElementById("buttonPosition");u.innerHTML="";const p=document.createElement("button");p.id="switchT",p.innerHTML="°F",p.classList.add("button","is-link"),u.appendChild(p),r(g),h.innerHTML=`${g.wind.speed} m/s`,a.innerHTML=`${g.main.humidity}%`,m.innerHTML=`<img src="http://openweathermap.org/img/wn/${g.weather[0].icon}.png"> </img> ${g.weather[0].description}`}}});function r(e){const t=e.main.temp,i=e.main.feels_like,n=document.getElementById("tempAct"),r=document.getElementById("tempFeel");switchT.addEventListener("click",(()=>{console.log(switchT.innerHTML),"°F"===switchT.innerHTML?(switchT.innerHTML="°C",console.log("yyy"),n.innerHTML=`${Math.round(9*t/5-459.67)}°F`,r.innerHTML=`${Math.round(9*i/5-459.67)}°F`):(console.log("kkk"),n.innerHTML=`${Math.round(t-273.15,-1)}°C`,r.innerHTML=`${Math.round(i-273.15,-2)}°C`,switchT.innerHTML="°F")}))}n.load(),document.getElementById("search").addEventListener("click",(()=>{const e=document.getElementById("cityInput").value;n.load(e)}))})()})();