/*==================
[NodeJS] Advanced Random - Unsigned Float
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const unsignedInteger = require("./unsignedinteger.js");
/**
 * @function unsignedFloat
 * @alias uFloat
 * @alias uFlt
 * @description Give a random unsigned float number.
 * @param {object} [configuration] Configuration.
 * @param {string} [configuration.endian="B"] Endian.
 * @param {string} [configuration.method="digit"] Method.
 * @returns {number} A random unsigned float number.
 */
function unsignedFloat(configuration) {
	let method = "digit";
	if (advancedDetermine.isJSON(configuration) == true) {
		if (configuration.method) {
			if (advancedDetermine.isString(configuration.method) == true) {
				method = configuration.method.toLowerCase();
			} else {
				console.warn(`Invalid type of "configuration.method"! Require type of string. Ignored this parameter.`);
			};
		};
	};
	const data = unsignedInteger({
		endian: configuration.endian,
		method: method,
		range: 1e16
	});
	const result = Number.parseFloat((data * 1e-16).toFixed(15));
	return result;
};
module.exports = unsignedFloat;
