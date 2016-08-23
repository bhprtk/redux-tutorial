if(process.env.NODE_ENV === 'production') {
	module.exports = require('./configureStore.prod');
} else {
	modules.exports = require('./configureStore.dev');
}
