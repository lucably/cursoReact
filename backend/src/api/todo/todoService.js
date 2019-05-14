const Todo = require('./todo') //To pegando o todo no module.export

Todo.methods(['get','post','put','delete']) // falando as açoes que podem fazer.
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo