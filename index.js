
const IP = document.getElementById("Ip");
const location1 = document.getElementById("location-region");
const location2 = document.getElementById("location-country");
const timezone = document.getElementById("timezone");
const isp = document.getElementById("isp");

const button = document.getElementById("btn");


// const url = 
const Key = 'at_6dkW9TSUmdjFxPXIJF2mN2YuOBBwc';
const options = {
  Headers:{
    'Access-Control-Allow-Origin':'*',
  }
}

 
  function getData(Address){
    fetch('https://geo.ipify.org/api/v2/country?apiKey=at_6dkW9TSUmdjFxPXIJF2mN2YuOBBwc&ipAddress='+Address,options)
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      IP.innerHTML=Address
      location1.innerHTML=data.location.region
      location2.innerHTML=data.location.country
      isp.innerHTML=data.isp
      timezone.innerHTML=data.location.timezone

  
    })
    .catch(error=>alert("Enter a Valid IP Address"));
  }

  button.addEventListener('click',()=>{
    getData(searchbar.value);
  })



  










