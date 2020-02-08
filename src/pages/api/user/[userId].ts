import {NextApiRequest, NextApiResponse} from 'next';

type Data = {
  name: string;
  id: string;
}

export default ({query: {userId}}: NextApiRequest, res: NextApiResponse<Data>) => {
  const user = {
    name: 'Guest',
    id: '0'
  };

  switch(userId) {
    case 'admin':
      user.name = 'John Doe';
      user.id = '111';
      break;
    case 'basic':
      user.name = 'Jane Doe';
      user.id = '222';
      break;
    default:
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(user));
};
