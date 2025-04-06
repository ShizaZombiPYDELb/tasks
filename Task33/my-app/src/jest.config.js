const path = require('path');

module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [path.resolve(__dirname, 'jest.setup.js')],
    moduleDirectories: ['node_modules', 'src'],
    testMatch: [
        '**/src/**/*.test.js',
        '**/src/**/*.spec.js'
    ]
};