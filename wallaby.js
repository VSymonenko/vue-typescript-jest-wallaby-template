module.exports = wallaby => {
  process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

  return {
    files: [
      'src/**',
      'package.json',
      'tsconfig.json',
      'jest.config.js',
      'tests/unit/common.ts',
      '!tests/unit/*.spec.ts',
      '!tests/unit/**/*.spec.ts',
      { pattern: 'src/components/*.+(css|less|scss|sass|styl|html|json|svg)', load: false },
      { pattern: 'src/style/*.+(css|less|scss|sass|styl|html|json|svg)', load: false },
      { pattern: 'src/components/**/*.+(css|less|scss|sass|styl|html|json|svg)', load: false },
    ],

    tests: [
      'tests/unit/*.spec.ts',
      'tests/unit/**/*.spec.ts',
      '!jest.config.js',
    ],

    env: {
      type: 'node',
      runner: 'node',
    },

    preprocessors: {
      '**/*.js?(x)': file => require('@babel/core').transform(
        file.content,
        {babelrc: true, sourceMap: true, compact: false, filename: file.path, plugins: ['babel-plugin-jest-hoist', '@babel/plugin-syntax-dynamic-import']}),
      },
      
      setup(wallaby) {
        const jestConfig = require('./jest.config')
        delete jestConfig.transform['^.+\\.tsx?$']
        wallaby.testFramework.configure(jestConfig)
    },

    testFramework: 'jest',

    debug: true
  }
}
