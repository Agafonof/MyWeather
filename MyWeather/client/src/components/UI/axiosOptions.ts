const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: { q: '' },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '1b538d1bd3msh3060a8263f8a827p11e4b2jsnc0cfb6dcc930',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  export default options