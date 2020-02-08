import fetch from 'isomorphic-unfetch';

export const userFetcher = async (id): Promise<any> => {
  let user = null;

  if (id) {
    try {
      const userResponse = await fetch(`${process.env.apiBaseURL}/api/user/${id}`);
      user = await userResponse.json();
    } catch (error) {
      console.log(error);
    }
  }

  return user;
};
