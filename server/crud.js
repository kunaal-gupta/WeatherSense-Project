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
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// (async () => {
//   let a = await FetchAPIdata();
//   console.log('hi', a);
// })();

module.exports = { FetchAPIdata };
