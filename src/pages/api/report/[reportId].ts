import {NextApiRequest, NextApiResponse} from 'next';

type Data = {
  queries: any[];
}

export default ({query: {reportId}}: NextApiRequest, res: NextApiResponse<Data>) => {
  const reportData = {
    queries: []
  };

  switch(reportId) {
    case '123456':
      reportData.queries = [
        {
          name: 'Query 1',
          id: 1
        }
      ];
      break;
    case '7891011':
      reportData.queries = [
        {
          name: 'Query 2',
          id: 2
        },
        {
          name: 'Query 3',
          id: 3
        }
      ];
      break;
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(reportData));
};
