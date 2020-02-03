import fetch from 'isomorphic-unfetch';

export const launchDarklyFetcher = async (user) => {
  let flags = {};
  const {id} = user;

  if (id) {
    try {
      const flagsResponse = await fetch(`${process.env.apiBaseURL}/api/launchDarkly/user/${id}`);
      flags = await flagsResponse.json();
    } catch (error) {
      console.log(error);
    }
  }

  return flags;
};
