import fetch from 'isomorphic-unfetch';

export const reportFetcher = async (reportId): Promise<any> => {
  let report = {
    queries: [],
    owner: {
      name: ''
    },
    reportName: ''
  };

  if (reportId) {
    try {
      const reportResponse = await fetch(`${process.env.apiBaseURL}/api/report/${reportId}`);
      report = await reportResponse.json();
    } catch (error) {
      console.log(error);
    }
  }

  return report;
};
