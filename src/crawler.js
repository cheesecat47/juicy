const request = require('request');

const url = "https://movie.naver.com/movie/running/current.nhn#";

request(url, (error, response, body) => {
  if (error) throw error;

  console.log(body);
});

var test = '작성중인 파일과 아무 상관없는 파일로 테스트 해봅니다.';
