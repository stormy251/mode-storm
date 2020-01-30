const path = require('path');

module.exports = {
	webpack (config) {
		// The following alias configurations will allow devs to not worry about the relative path scoping
		config.resolve.alias['components'] = path.join(__dirname, 'src', 'components');
		config.resolve.alias['lib'] = path.join(__dirname, 'src', 'lib');
		return config;
	}
};
