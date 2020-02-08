import {NextApiRequest, NextApiResponse} from 'next';

type Data = {
  isAdmin: boolean;
}

export default ({query: {userId}}: NextApiRequest, res: NextApiResponse<Data>) => {
  const flags = {
    isAdmin: false
  };

  // dummy test user id to ensure LDFlags are coming back correctly.
  if (userId === '111') {
    flags.isAdmin = true;
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(flags));
};
