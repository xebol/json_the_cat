const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const APIendpointURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(APIendpointURL, (error, response, body) => {
    //handle error and if catBreed is not found
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);
    const breed = data[0];
    if (!breed) {
      callback('Breed not found');
      return;
    }

    callback(null, breed.description);
  });
};


module.exports = {
  fetchBreedDescription,
}