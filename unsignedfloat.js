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
 * @param {object} [option] Option.
 * @param {string} [option.endian="B"] Endian.
 * @param {string} [option.method="digit"] Method.
 * @returns {number} A random unsigned float number.
 */
function unsignedFloat(option) {
	let runtime = {
		method: "digit"
	};
	if (advancedDetermine.isJSON(option) == true) {
		if (option.method) {
			if (advancedDetermine.isString(option.method) == true) {
				runtime.method = option.method.toLowerCase();
			} else {
				console.warn(`Invalid type of "option.method"! Require type of string. Ignored this parameter.`);
			};
		};
	};
	const data = unsignedInteger({
		endian: option.endian,
		method: runtime.method,
		range: 1e16
	});
	const result = Number.parseFloat((data * 1e-16).toFixed(15));
	return result;
};
module.exports = unsignedFloat;
