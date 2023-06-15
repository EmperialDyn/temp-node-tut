const _ = require('lodash')

const items = [1, [2, 3, [4, '2:03:00']]]
const newItems = _.flattenDeep(items);
console.log(newItems)