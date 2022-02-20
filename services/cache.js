const redis = require('redis');
const CON_STRING = process.env.REDIS_CON_STRING

let client = null;
const getcon = async () => {
    client = redis.createClient({url: CON_STRING});

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();
  console.log("Connected to Redis!");
}
getcon();

module.exports = client