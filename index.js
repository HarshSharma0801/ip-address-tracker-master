
const IP = document.getElementById("Ip");
const location1 = document.getElementById("location-region");
const location2 = document.getElementById("location-country");
const location3 = document.getElementById("location-city");
const timezone = document.getElementById("timezone");
const isp = document.getElementById("isp");

const IPmobile = document.querySelector(".container-data-mobile.IP");
const location3mobile=document.querySelector(".Location.city");
const location1mobile=document.querySelector(".Location.region");
const location2mobile=document.querySelector(".Location.country");
const timezonemobile = document.querySelector(".container-data-mobile.timezone");
const ispmobile = document.querySelector(".container-data-mobile.isp");


const button = document.getElementById("btn");
const main = document.getElementById("data");
main.style.display="none";
const mainmobile = document.getElementById("mobile");


// const url = 
const Key = 'at_6dkW9TSUmdjFxPXIJF2mN2YuOBBwc';
const options = {
  Headers:{
    'Access-Control-Allow-Origin':'*',
  }
}
var Icon = L.icon({
    iconUrl: 'images/icon-location.svg'});

var map = L.map('map').setView([28.648799896240234,77.28150177001953], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([28.648799896240234,77.28150177001953],{icon: Icon}).addTo(map);


 
  function getData(Address){
    fetch('https://ipapi.co/'+Address+'/json/',options)
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      IP.innerHTML=data.ip
      IPmobile.innerHTML=data.ip
      location3.innerHTML=data.city
      location3mobile.innerHTML=data.city
      location1.innerHTML=data.region
      location1mobile.innerHTML=data.region
      location2.innerHTML=data.country_name
      location2mobile.innerHTML=data.country_name
      isp.innerHTML=data.org
      ispmobile.innerHTML=data.org
      timezone.innerHTML=data.timezone
      timezonemobile.innerHTML=data.timezone
      map.setView([data.latitude,data.longitude],13)
      marker = L.marker([data.latitude,data.longitude],{icon: Icon}).addTo(map);
  
    })
  }
//return

  button.addEventListener('click',()=>{
    getData(searchbar.value);
    main.style.display="flex";
    mainmobile.style.display="block";
  })



  










