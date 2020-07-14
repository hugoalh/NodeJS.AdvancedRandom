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
 * @param {object} [option] Option.
 * @param {string} [option.endian="B"] Endian.
 * @param {string} [option.method="set"] Method.
 * @param {number} [option.range=1e16] Range.
 * @returns {number} A random signed integer number.
 */
function signedInteger(option) {
	const data = unsignedInteger(option);
	let result;
	if (randomCore(true, 1, option.endian) < 0) {
		result = -data;
	} else {
		result = data;
	};
	return result;
};
module.exports = signedInteger;
