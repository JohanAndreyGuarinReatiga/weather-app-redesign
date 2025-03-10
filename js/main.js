const url = new URL("http://api.weatherapi.com/v1/current.json");
url.searchParams.set("key", "4230332658084be4893154616251003");
url.searchParams.set("q", "floridablanca");
url.searchParams.set("lang", "es");

const response = await fetch("http://api.weatherapi.com/v1/current.json?key=4230332658084be4893154616251003&q=floridablanca&lang=es", {
    method:"GET"
})

const data = await response.json();

console.log(data);