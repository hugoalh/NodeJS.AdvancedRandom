/*==================
[NodeJS] Advanced Random - Signed Integer
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const randomCore = require("./randomcore.js");
const unsignedInteger = require("./unsignedinteger.js");
/**
 * @function signedInteger
 * @alias integer
 * @alias int
 * @param {object} [configuration]
 * @param {string} [configuration.endian="B"]
 * @param {string} [configuration.method="digit"]
 * @param {number} [configuration.range=1e15]
 */
function signedInteger(configuration) {
	let endian = "B";
	if (advancedDetermine.isJSON(configuration) == true) {
		if (configuration.endian) {
			if (advancedDetermine.isString(configuration.endian) == true && (configuration.endian.toUpperCase() === "B" || configuration.endian.toUpperCase() === "L")) {
				endian = configuration.endian.toUpperCase();
			} else {
				console.warn(`Invalid type/reference of "configuration.endian"! Require type of string. Ignored this parameter. (Read the documentation for more information.)`);
			};
		};
	};
	const data = unsignedInteger({
		endian: endian,
		method: configuration.method,
		range: configuration.range
	});
	let result;
	if (randomCore(true, 1, endian) < 0) {
		result = -data;
	} else {
		result = data;
	};
	return result;
};
module.exports = signedInteger;
