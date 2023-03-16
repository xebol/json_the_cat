const request = require('request');

const args = process.argv.slice(2);
const catBreed = args[0];
const APIendpointURL = `https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`;


const breedFetcher = (catBreed) => {
  request(APIendpointURL, (error, response, body) => {
    //handle error and if catBreed is not found
    if (error) {
      console.log(`Request failed ${error}`);
      return;
    }
    const data = JSON.parse(body);

    if (data.length === 0) {
      console.log(`The breed ${catBreed} is not found`);
    }
    console.log(data[0].description);
  });
};
breedFetcher(catBreed);
