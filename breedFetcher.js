const request = require('request');

const breedFetcher = (catBreed) => {
  const APIendpointURL = `https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`;

  request(APIendpointURL, (error, response, body) => {
    //handle error and if catBreed is not found
    if (error) {
      console.log(`Request failed ${error}`);
      return;
    }
    
    const data = JSON.parse(body);
    const breed = data[0];
    if (!breed) {
      console.log(`The breed ${catBreed} is not found`);
      return;
    }

    console.log(breed.description);
  });
};

const args = process.argv.slice(2);

breedFetcher(args[0]);
