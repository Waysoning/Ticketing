const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT sign in</h1>
  );
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
LandingPage.getInitialProps = async (contex, client, currentUser) => {
  // const client = buildClient(req);
  // const { data } = await client.get('/api/users/currentuser');
  // return data;
  return {};
};

export default LandingPage;
