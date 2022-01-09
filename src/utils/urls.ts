let BASE_URL = process.env.REACT_APP_BASE_URL;

let endpoints = {
  auth: {
    //dummy endpoint
    getToken: `${BASE_URL}/jara/token`,
  },
  users: {
    //dummy endpoint
    mainUrl: `${BASE_URL}/jara/jarausers`,
  },
};

//removed modules.exports for Typescript due to --isolatedModules error
export { endpoints, BASE_URL };
