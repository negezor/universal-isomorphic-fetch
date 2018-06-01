if (!global.fetch) {
	// eslint-disable-next-line global-require
	require('whatwg-fetch');
}

module.exports = global.fetch.bind(global);
