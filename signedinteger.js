/*==================
[NodeJS] Advanced Random - Signed Integer
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("./internalservice.js");
const randomCore = require("./randomcore.js");
const unsignedInteger = require("./unsignedinteger.js");
/**
 * @function signedInteger
 * @alias int
 * @alias integer
 * @description Give a random signed integer number in the given range.
 * @param {object} [option] Option.
 * @param {string} [option.endian="B"] Endian.
 * @param {string} [option.method="set"] Method.
 * @param {number} [option.range=1e16] Range.
 * @returns {number} A random signed integer number.
 */
function signedInteger(option) {
	let runtime = {
		endian: "B"
	};
	if (advancedDetermine.isObjectPair(option) == true) {
		if (typeof option.endian != "undefined") {
			if (advancedDetermine.isString(option.endian) != true) {
				return internalService.prefabTypeError("option.endian", "string");
			}
			option.endian = option.endian.toUpperCase();
			if (option.endian !== "B" && option.endian !== "L") {
				return internalService.prefabReferenceError("option.endian");
			}
			runtime.endian = option.endian;
		}
	}
	const bin = unsignedInteger(option);
	return (
		randomCore(true, 1, runtime.endian) < 0 ? -bin : bin
	);
}
module.exports = signedInteger;
