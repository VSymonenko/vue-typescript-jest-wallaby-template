module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
    'ts',
    'tsx'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    "\\.(css|less|scss|sass|styl)$": "identity-obj-proxy"
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
    '**/tests/unit/**/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/*.{ts,vue}',
    '**/src/components/*.{ts,vue}',
    '**/src/components/**/*.{ts,vue}',
    '**/src/app/*.{ts,vue}',
    '**/src/views/*.{ts,vue}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/test/**',
    '!**/coverage/**'
  ],
  coverageReporters: ['html', 'text-summary']
}

process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;
