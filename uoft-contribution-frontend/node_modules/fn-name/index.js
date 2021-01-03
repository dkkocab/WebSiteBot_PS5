'use strict';

module.exports = fn => {
	if (typeof fn !== 'function') {
		throw new TypeError('Expected a function');
	}

	return fn.displayName || fn.name || (/function ([^(]+)?\(/.exec(fn.toString()) || [])[1];
};
