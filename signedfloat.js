/*==================
[NodeJS] Advanced Random - Signed Float
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("./internalservice.js");
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
	let runtime = {
		endian: "B"
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
	};
	const bin = unsignedFloat(option);
	return (
		(randomCore(true, 1, runtime.endian) < 0) ? -bin : bin
	);
};
module.exports = signedFloat;
