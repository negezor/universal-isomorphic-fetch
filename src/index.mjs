if (!global.fetch) {
	// eslint-disable-next-line global-require
	const fetch = require('node-fetch');

	const {
		Headers,
		Request,
		Response,
		FetchError
	} = fetch;

	Object.assign(global, {
		fetch,

		Headers,
		Request,
		Response,
		FetchError
	});
}

module.exports = global.fetch;
