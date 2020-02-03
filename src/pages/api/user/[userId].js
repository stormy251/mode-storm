export default ({query: {userId}}, res) => {
  let user = {};

  switch(userId) {
    case 'admin':
      user = {
        name: 'John Doe',
        id: '111'
      };
      break;
    case 'basic':
      user = {
        name: 'John Doe',
        id: '222'
      };
      break;
    default:
      user = {
        name: 'Guest',
        id: 0
      };
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(user));
};
