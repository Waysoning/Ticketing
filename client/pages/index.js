import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);

  // work on broswer
  // axios.get('/api/users/currentuser').catch((err) => {
  //   console.log(err.message);
  // });

  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async () => {
  if (typeof window === 'undefined') {
    // we are on the server
    // requests should make to ........
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        headers: {
          Host: 'ticketing.dev',
        },
      }
    );
    // alternative way
    return data;
  } else {
    // we are on the broswer
    // requests can be made with a base url of ''
    const response = await axios.get('/api/users/currentuser');
    // { currentUser : {} || null}
    return response.data;
  }

  // work on client when navigate from one page to another
  // mostly work on server and should deal with domain issue
};

export default LandingPage;
