const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {

      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim());

      done();

    });
  });

  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siamese', (err, desc) => {

      assert.equal(err, null);

      const expectedDesc = "While Siamese cats are extremely fond of their people, they will follow you around and supervise your every move, being talkative and opinionated. They are a demanding and social cat, that do not like being left alone for long periods.";

      assert.equal(expectedDesc, desc.trim());

      done();

    });
  });

  it('returns an error if the breed is not found', (done) => {
    fetchBreedDescription('Husky', (err, desc) => {

      assert.equal(err, err);

      const expectedDesc = undefined;

      assert.equal(expectedDesc, desc);

      done();

    });
  });
});