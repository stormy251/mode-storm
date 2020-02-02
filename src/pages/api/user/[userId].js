export default (req, res) => {
  let user = {};
  const {query} = req;
  const {userId} = query;

  switch(userId) {
    case 'stormy':
      user = {
        name: 'Stormy Adams'
      };
      break;
    case 'audrie':
      user = {
        name: 'Audrie Adams'
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
