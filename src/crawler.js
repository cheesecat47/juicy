const request = require('request');

const url = "https://movie.naver.com/movie/running/current.nhn#";

request(url, (error, response, body) => {
  if (error) throw error;

  console.log(body);
});
