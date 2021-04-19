//Modules

const john = 'john'
const peter = 'peter'

const sayHi = (name) => {
  console.log(`Hello there ${name}`)
}

sayHi('Susan')
sayHi(john)
sayHi(peter)

// If we want to have the functions to be available to all the ohther files
// then we can encapsulate them using modules
// Every file in node is module
// We can create seperate files

//names.js
// const john = 'john'
// const peter = 'peter'
// If we run console.log(module) in this file we find that the export object is empty
// So we need to export
// module.exports = {john,peter}
// now we can acess john and peter anywhere.

//names.util.js
/* const sayHi = (name) => {
    console.log(`Hello there ${name}`)
} 
module.exports = sayHi
*/

//app.js
// const names = require('./names.js'); --> where is this data coming from , specifing the path
// console.log(names) --> will give error i.e sayHi is not defined
/* sayHi(susan)
sayHi(john)
   sayHi(peter)
   */
// const sayHi = require('./names.util.js')
// Now we can run the file and there will be error we need to destrucre the object
/* sayHi('Susan')
   sayHi(names.john)
   sayHi(names.peter)
*/

/*
  module.exports.items=['item1','item2']
  const person = {
     name:'bob'
  }
  */

/* ALTERNATIVE SYNTAX -
  module.exports/singlePerson=person
  */
