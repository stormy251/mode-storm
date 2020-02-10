import {NextApiRequest, NextApiResponse} from 'next';

type Data = {
  queries: any[];
  owner: any;
  name: string;
  id: string;
}

export default ({query: {reportId}}: NextApiRequest, res: NextApiResponse<Data>) => {
  const reportData = {
    queries: [],
    owner: {
      name: ''
    },
    name: '',
    id: ''
  };

  switch(reportId) {
    case '123456':
      reportData.queries = [
        {
          name: 'Query 1',
          id: 1,
          visualizations: [
            {
              name: 'Line Chart',
              id: '654321'
            }
          ]
        }
      ];
      reportData.owner.name = 'John Doe';
      reportData.name = 'Storm Report';
      reportData.id = '123456';
      break;
    case '7891011':
      reportData.queries = [
        {
          name: 'Query 2',
          id: 2,
          visualizations: [
            {
              name: 'Bar Chart',
              id: '1101987'
            }
          ]
        },
        {
          name: 'Query 3',
          id: 3,
          visualizations: [
            {
              name: 'Donut Chart',
              id: '11019873'
            }
          ]
        }
      ];
      reportData.owner.name = 'John Doe';
      reportData.name = 'Storm Report --- V2';
      reportData.id = '7891011';
      break;
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(reportData));
};
