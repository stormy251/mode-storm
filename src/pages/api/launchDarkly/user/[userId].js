export default ({query: {userId}}, res) => {
	let flags = {};

	switch(userId) {
		case '111':
			flags = {
				isAdmin: true
			};
			break;
		case '222':
			flags = {
				isAdmin: false
			};
			break;
		default:
			flags = {};
	}
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(flags));
};
