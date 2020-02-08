import fetch from 'isomorphic-unfetch';

export const spaceFetcher = async (id): Promise<any> => {
  let spaceInfo = null;

  if (id) {
    try {
      const spaceResponse = await fetch(`${process.env.apiBaseURL}/api/spaces/${id}`);
      spaceInfo = await spaceResponse.json();
    } catch (error) {
      console.log(error);
    }
  }

  return spaceInfo;
};
