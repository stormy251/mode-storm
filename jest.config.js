module.exports = {
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	moduleNameMapper: {
		'^components(.*)$': '<rootDir>/components$1',
		'^capra(.*)$': '<rootDir>/components/capra$1',
		'^lib(.*)$': '<rootDir>/lib$1'
	},
	setupFilesAfterEnv: [
		'@testing-library/jest-dom/extend-expect',
		'jest-styled-components'
	]
};
