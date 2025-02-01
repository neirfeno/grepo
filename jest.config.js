/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.base.json'
    }]
  },
  moduleNameMapper: {
    '^@neirfeno/(.*)$': '<rootDir>/packages/$1/src'
  }
};
