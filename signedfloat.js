/*==================
[NodeJS] Advanced Random - Signed Float
	Language:
		NodeJS 14
==================*/
const randomCore = require("./randomcore.js");
const unsignedFloat = require("./unsignedfloat.js");
/**
 * @function signedFloat
 * @alias float
 * @alias flt
 * @description Give a random signed float number.
 * @param {object} [option] Option.
 * @param {string} [option.endian="B"] Endian.
 * @param {string} [option.method="digit"] Method.
 * @returns {number} A random signed float number.
 */
function signedFloat(option) {
	const data = unsignedFloat(option);
	let result;
	if (randomCore(true, 1, option.endian) < 0) {
		result = -data;
	} else {
		result = data;
	};
	return result;
};
module.exports = signedFloat;
