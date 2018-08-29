import petfinderClient from 'petfinder-client';

export default petfinderClient({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET,
});
