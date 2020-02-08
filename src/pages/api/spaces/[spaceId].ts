import {NextApiRequest, NextApiResponse} from 'next';

type Data = {
  reports: any[];
}

export default ({query: {spaceId}}: NextApiRequest, res: NextApiResponse<Data>) => {
  const spaceData = {
    reports: []
  };

  switch(spaceId) {
    case '123':
      spaceData.reports = [
        {
          name: 'report 1'
        }
      ];
      break;
    case '345':
      spaceData.reports = [
        {
          name: 'report 2'
        },
        {
          name: 'report 3'
        }
      ];
      break;
    default:
      spaceData.reports = [];
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(spaceData));
};
