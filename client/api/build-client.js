import axios from 'axios';

// bug that use req rather than {req}
const buildClient = (req) => {
  if (typeof window === 'undefined') {
    // we are on the server
    // requests should make to ........
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    // we are on the broswer
    // requests can be made with a base url of ''
    return axios.create({
      baseURL: '/', // default
    });
  }
};

export default buildClient;
