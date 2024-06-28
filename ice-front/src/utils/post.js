const DOMAIN = 'http://localhost:8000';

const fetch = (location, method) => {
  fetch(DOMAIN + location, { method: method })
    .then((res) => res.json)
    .then((res) => {
      return res;
    });
};

export default fetch;