import petfinderClient from 'petfinder-client';

const petfinder = petfinderClient({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET,
});

export default petfinder;
