/*==================
[NodeJS] Advanced Random - Signed Integer
	Language:
		NodeJS 14
==================*/
const randomCore = require("./randomcore.js");
const unsignedInteger = require("./unsignedinteger.js");
/**
 * @function signedInteger
 * @alias integer
 * @alias int
 * @description Give a random signed integer number in the given range.
 * @param {object} [configuration] Configuration.
 * @param {string} [configuration.endian="B"] Endian.
 * @param {string} [configuration.method="set"] Method.
 * @param {number} [configuration.range=1e16] Range.
 * @returns {number} A random signed integer number.
 */
function signedInteger(configuration) {
	const data = unsignedInteger(configuration);
	let result;
	if (randomCore(true, 1, configuration.endian) < 0) {
		result = -data;
	} else {
		result = data;
	};
	return result;
};
module.exports = signedInteger;
