let search=document.querySelector("#search");
let btn =document.querySelector("#btn");
let cityName =document.querySelector(".cityName");
let deg =document.querySelector("#deg");
let desc = document.querySelector("#desc");
let symbolimg = document.querySelector("#symbolimg");
let per1 = document.querySelector("#per1");
let per2 = document.querySelector("#per2");


btn.addEventListener("click", () => {
    let city = search.value;                      

    const getWeather= async (city)=>{
        let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=75c1397c18c4f75678f2c689b09aee53&units=metric`);
        let data = await response.json();
        console.log(data);
        cityName.textContent = data.name;
        deg.innerHTML = `${data.main.temp}&deg;C`;
        desc.textContent=data.weather[0].description;

        deg.classList.add("fade-in");
        symbolimg.classList.add("fade-in");
        setTimeout(() => {
            deg.classList.remove("fade-in");
            symbolimg.classList.remove("fade-in");
        }, 1000);


        if(data.weather[0].description==="clear sky"){
            symbolimg.src="clear.png";
        }else if(data.weather[0].description==="few clouds"){
            symbolimg.src="mist.png";
        }else if(data.weather[0].description==="scattered clouds"){
            symbolimg.src="drizzle.png";
        }else if(data.weather[0].description==="broken clouds"){
            symbolimg.src="clouds.png";
        }else if(data.weather[0].description==="overcast clouds"){
            symbolimg.src="cloudy.png";
        }else if(data.weather[0].description==="light rain"){
            symbolimg.src="rain.png";
        }

        search.value = "";

        per1.innerHTML=`${data.main.humidity}%`;
        per2.innerHTML=`${data.wind.speed}km/h`;

    }
    getWeather(city);

});





