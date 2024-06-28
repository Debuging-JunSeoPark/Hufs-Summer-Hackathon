import axios from 'axios';

const DOMAIN = 'http://localhost:4000';

const API_DOMAIN = `${DOMAIN}/api`;

const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`;
const SIGN_UP_URL = () => `${API_DOMAIN}/auth/sign-up`;
const SEARCH_NAME_URL = () => `${API_DOMAIN}/auth/name`;
const POST_ARTICLE_URL = () => `${API_DOMAIN}/v1/article`;

export const signInRequest = async (requestBody) => {
  //asyns를 통해 비동기 함수 정의
  const result = await axios
    .post(SIGN_IN_URL(), requestBody) //await은 요청의 응답이 돌아올 떄 까지 함수 실행을 멈추는 역할 한다(asyns함수 안에서만 사용가능)
    .then((response) => {
      const responseBody = response.data; // responseBody의 key값들이: code, message, token, expirationTime
      return responseBody;
    })
    .catch((error) => {
      if (!error.response || !error.response.data) return null; //예상하지못한 error를 0으로 반환
      const responseBody = error.response.data; //예상했던 error를 code와message로 반환
      return responseBody;
    });
  return result;
};

export const signUpRequest = async (requestBody) => {
  const result = await axios
    .post(SIGN_UP_URL(), requestBody) //await은 요청의 응답이 돌아올 떄 까지 함수 실행을 멈추는 역할 한다(asyns함수 안에서만 사용가능)
    .then((response) => {
      const responseBody = response.data; // responseBody의 key값들이: code, message, token, expirationTime

      return responseBody;
    })
    .catch((error) => {
      if (!error.response || !error.response.data) return null; //예상하지못한 error를 0으로 반환
      const responseBody = error.response.data; //예상했던 error를 code와message로 반환
      return responseBody;
    });
  return result;
};

export const searchNameRequest = async (requestBody) => {
  //asyns를 통해 비동기 함수 정의
  const result = await axios
    .get(SEARCH_NAME_URL(), requestBody) //await은 요청의 응답이 돌아올 떄 까지 함수 실행을 멈추는 역할 한다(asyns함수 안에서만 사용가능)
    .then((response) => {
      const responseBody = response.data; // responseBody의 key값들이: code, message, articleList
      return responseBody;
    })
    .catch((error) => {
      if (!error.response || !error.response.data) return null; //예상하지못한 error를 0으로 반환
      const responseBody = error.response.data; //예상했던 error를 code와message로 반환
      return responseBody;
    });
  return result;
};

export const postArticleRequest = async (requestBody) => {
    //asyns를 통해 비동기 함수 정의
    const result = await axios
      .post(POST_ARTICLE_URL(), requestBody) //await은 요청의 응답이 돌아올 떄 까지 함수 실행을 멈추는 역할 한다(asyns함수 안에서만 사용가능)
      .then((response) => {
        const responseBody = response.data; // responseBody의 key값들이: code, message
        return responseBody;
      })
      .catch((error) => {
        if (!error.response || !error.response.data) return null; //예상하지못한 error를 0으로 반환
        const responseBody = error.response.data; //예상했던 error를 code와message로 반환
        return responseBody;
      });
    return result;
  };
