// npm - global command , comes with code
// npm --version

//local dependency - use it only in this particular project
// npm i <package name>

//global dependency - use it in any project
//npm install -g <package name>

//package.json - manifest file (stores important information about our project)
//manual approach (craete package.json in the root , create properties etc)
//npm init
//npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
