module.exports = {
	collectCoverageFrom: [
		'**/*.{ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
	],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
		'^.+\\.css$': '<rootDir>/config/jest/cssTransform.js'
	},
	transformIgnorePatterns: [
		'/node_modules/',
		'^.+\\.module\\.(css|sass|scss)$',
	],
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	moduleNameMapper: { // These should be kept in sync with the alias defined in the next.config.js
		'^lib(.*)$': '<rootDir>/src/lib$1',
		'^zones(.*)$': '<rootDir>/src/zones$1',
		'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
	},
	// Runs special logic, such as cleaning up components
	// when using React Testing Library and adds special
	// extended assertions to Jest
	setupFilesAfterEnv: [
		"@testing-library/jest-dom/extend-expect",
		"jest-styled-components"
	]
};
