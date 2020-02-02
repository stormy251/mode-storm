export default ({query: {userId}}, res) => {
  let user = {};

  switch(userId) {
    case 'admin':
      user = {
        name: 'John Doe - Admin'
      };
      break;
    case 'basic':
      user = {
        name: 'John Doe - Basic'
      };
      break;
    default:
      user = {
        name: 'Guest'
      };
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(user));
};
