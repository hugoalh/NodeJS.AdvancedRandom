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
 * @param {object} [configuration] Configuration.
 * @param {string} [configuration.endian="B"] Endian.
 * @param {string} [configuration.method="digit"] Method.
 * @returns {number} A random signed float number.
 */
function signedFloat(configuration) {
	const data = unsignedFloat(configuration);
	let result;
	if (randomCore(true, 1, configuration.endian) < 0) {
		result = -data;
	} else {
		result = data;
	};
	return result;
};
module.exports = signedFloat;
