const axios = require('axios');

const data = {};

async function FetchAPIdata() {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: 'Edmonton' },
    headers: {
      'X-RapidAPI-Key': 'a2b8cee08fmshf8ce534fdf59941p1031e5jsn95fae70bda7a',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data)

    const uv = response.data.current.uv;
    const tempC = response.data.current.temp_c;
    const feelsLikeC = response.data.current.feelslike_c;
    const windMph = response.data.current.wind_mph;
    const pressureMb = response.data.current.pressure_mb;
    const visibilityKm = response.data.current.vis_km;
    const gustMph = response.data.current.gust_mph;
    const location = respones.data.location.name + ', ' + respones.data.location.Country + ', ' +  respones.data.location.region 
    const longitude = response.data.current.lat;
    const latitude = response.data.current.lon;
    const WindDeg  = response.data.wind_mph;
    const WindDir =  response.data.WindDir;
    const Precipitation = response.data.Precipitation

    data.UV = uv;
    data.Temp = tempC;
    data.FeelsLike = feelsLikeC;
    data.Wind = windMph;
    data.Pressure = pressureMb;
    data.Visibility = visibilityKm;
    data.Gust = gustMph;    
    data.location = location;
    data.longitude = longitude;
    data.latitude = latitude;
    data.windDeg = WindDeg;
    data.WindDir = WindDir;
    data.Precipitation = Precipitation;

    return data
  } catch (error) {
    console.error(error);
  }
}

// (async () => {
//   let a = await FetchAPIdata();
//   console.log('hi', a);
// })();

module.exports = { FetchAPIdata };
