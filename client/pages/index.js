import axios from 'axios';
import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);

  // work on broswer
  // axios.get('/api/users/currentuser').catch((err) => {
  //   console.log(err.message);
  // });

  return <h1>Landing Page</h1>;
};

// LandingPage.getInitialProps = async ({ req }) => {
//   if (typeof window === 'undefined') {
//     // we are on the server
//     // requests should make to ........
//     const { data } = await axios.get(
//       'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
//       {
//         headers: req.headers,
//       }
//     );
//     // alternative way
//     return data;
//   } else {
//     // we are on the broswer
//     // requests can be made with a base url of ''
//     const response = await axios.get('/api/users/currentuser');
//     // { currentUser : {} || null}
//     return response.data;
//   }

//   // work on client when navigate from one page to another
//   // mostly work on server and should deal with domain issue
// };

// argument is req
LandingPage.getInitialProps = async ({ req }) => {
  const client = buildClient(req);
  const { data } = await client.get('/api/users/currentuser');
  return data;
};

export default LandingPage;
