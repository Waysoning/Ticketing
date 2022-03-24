import Link from 'next/link';

const LandingPage = ({ currentUser, tickets }) => {
  const ticketList = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            <a>View</a>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Tickets</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table>
    </div>
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

  const { data } = await client.get('/api/tickets');

  return { tickets: data };
};

export default LandingPage;
