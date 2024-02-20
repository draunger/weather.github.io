const input = document.getElementById('here');
const city = document.getElementById('city');
const forecast = document.getElementById('forecast');
const temp = document.getElementById('tem');
const humidity = document.getElementById('hum');
const image = document.getElementById('img');



input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const data1=input.value;
    fetch(`http://api.weatherapi.com/v1/current.json?key=44f47bf5dc874a6abb2135509242002&q=${data1}&aqi=yes`)
.then(Response =>{
  return Response.json();
})
.then(data =>{
  city.innerText = data.location.name;
  forecast.innerText =data.current.condition.text;
  temp.innerText=data.current.temp_c;
  humidity.innerText=data.current.humidity;
  image.innerHTML=`<img src="${data.current.condition.icon}" height="180px" width="180px">`
})
  }
});
