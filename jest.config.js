module.exports = {
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	moduleNameMapper: {
		'^lib(.*)$': '<rootDir>/src/lib$1',
		'^zones(.*)$': '<rootDir>/src/zones$1'
	},
	setupFilesAfterEnv: [
		'@testing-library/jest-dom/extend-expect',
		'jest-styled-components'
	]
};
