/*==================
[NodeJS] Advanced Random - Unsigned Float
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("./internalservice.js");
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
	if (advancedDetermine.isObjectPair(option) == true) {
		if (typeof option.method != "undefined") {
			if (advancedDetermine.isString(option.method) != true) {
				return internalService.prefabTypeError("option.method", "string");
			};
			runtime.method = option.method.toLowerCase();
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
