const url = 'https://geo.ipify.org/api/v2/country?apiKey=at_6dkW9TSUmdjFxPXIJF2mN2YuOBBwc&ipAddress=8.8.8.8';
const Key = 'at_6dkW9TSUmdjFxPXIJF2mN2YuOBBwc';
const options = {
  Headers:{
    'Access-Control-Allow-Origin':'*',
  }
}
fetch(url,options)
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>alert("Enter a Valid IP Address"));



