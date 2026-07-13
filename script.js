const apiKey = 'd19d7a14dd704280958170545261307';

document.getElementById("search-btn").addEventListener("click", buscarClima);

async function buscarClima(){

    const cidade = document.getElementById("city-input").value;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}&lang=pt`;

    try{

        const resposta = await fetch(url);
        const dados = await resposta.json();

       document.getElementById("weather-result").classList.remove("hidden");
        document.getElementById("error-message").classList.add("hidden");

        document.getElementById("city-name").textContent = dados.location.name;
        document.getElementById("local-time").textContent = dados.location.localtime;
        document.getElementById("weather-icon").src = "https:" + dados.current.condition.icon;
        document.getElementById("temperature").textContent = dados.current.temp_c + " °C";
        document.getElementById("condition").textContent = dados.current.condition.text;
        document.getElementById("feels-like").textContent = dados.current.feelslike_c + " °C";
        document.getElementById("humidity").textContent = dados.current.humidity + "%";
        document.getElementById("wind-speed").textContent = dados.current.wind_kph + " km/h";
        document.getElementById("pressure").textContent = dados.current.pressure_mb + " mb";
        document.getElementById("visibility").textContent = dados.current.vis_km + " km";
        document.getElementById("uv-index").textContent = dados.current.uv;

    } catch (erro) {

    
        document.getElementById("weather-result").classList.add("hidden");
        document.getElementById("error-message").classList.remove("hidden");
    }
}