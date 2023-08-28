// cypress/plugins/index.js

const cypressEslint = require('cypress-eslint-preprocessor')

module.exports = (on: any) => {
  on('file:preprocessor', cypressEslint())
}
