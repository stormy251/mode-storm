import fetch from 'isomorphic-unfetch';

export const reportFetcher = async (reportId): Promise<any> => {
  let reportInfo = {
    queries: []
  };

  if (reportId) {
    try {
      const reportResponse = await fetch(`${process.env.apiBaseURL}/api/report/${reportId}`);
      reportInfo = await reportResponse.json();
    } catch (error) {
      console.log(error);
    }
  }

  return reportInfo;
};
