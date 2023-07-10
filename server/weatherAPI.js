const axios = require('axios');

const data = {};

async function FetchAPIdata(city) {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: city },
    headers: {
      'X-RapidAPI-Key': 'a2b8cee08fmshf8ce534fdf59941p1031e5jsn95fae70bda7a',
      'X-RapidAPI-Key': 'Enter your API-KEY',

      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);

    console.log(response)

    data.Cloud = response.data.current.cloud
    data.Time = response.data.location.localtime
    data.UV = response.data.current.uv;
    data.Temp = response.data.current.temp_c;
    data.FeelsLike = response.data.current.feelslike_c;
    data.Wind = response.data.current.wind_mph;
    data.Pressure = response.data.current.pressure_mb;
    data.Visibility = response.data.current.vis_km;
    data.Gust = response.data.current.gust_mph;
    data.Location = response.data.location.name + ', ' + response.data.location.region + ', ' +  response.data.location.country 
    data.Longitude = response.data.location.lat;;
    data.Latitude = response.data.location.lon;;
    data.WindDeg = response.data.current.wind_degree;
    data.WindDir = response.data.current.wind_dir;
    data.Precipitation = response.data.current.precip_in;
    data.Localtime = response.data.location.localtime;
    data.UV = response.data.current.uv;
    data.Humidity = response.data.current.humidity;





    return data
  } catch (error) {
    console.error(error);
  }
}

// (async () => {
//   let a = await FetchAPIdata('New York, Canada');
//   console.log('hi', a);
// })();

module.exports = { FetchAPIdata };
