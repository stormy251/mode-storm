import fetch from 'isomorphic-unfetch';

export const userFetcher = async (id) => {
  let user = null;

  if (id) {
    try {
      const userResponse = await fetch(`http://localhost:3000/api/user/${id}`);
      user = await userResponse.json();
    } catch (error) {
      console.log(error);
    }
  }

  return user;
};
