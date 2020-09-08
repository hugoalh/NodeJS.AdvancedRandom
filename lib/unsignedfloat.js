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
		endian: "B",
		method: "digit"
	};
	if (advancedDetermine.isObjectPair(option) == true) {
		if (typeof option.endian != "undefined") {
			if (advancedDetermine.isString(option.endian) != true) {
				return internalService.prefabTypeError("option.endian", "string");
			};
			option.endian = option.endian.toUpperCase();
			if (option.endian !== "B" && option.endian !== "L") {
				return internalService.prefabReferenceError("option.endian");
			};
			runtime.endian = option.endian;
		};
		if (typeof option.method != "undefined") {
			if (advancedDetermine.isString(option.method) != true) {
				return internalService.prefabTypeError("option.method", "string");
			};
			runtime.method = option.method.toLowerCase();
		};
	};
	return Number.parseFloat(
		(unsignedInteger({
			endian: runtime.endian,
			method: runtime.method,
			range: 1e16
		}) * 1e-16).toFixed(15)
	);
};
module.exports = unsignedFloat;
