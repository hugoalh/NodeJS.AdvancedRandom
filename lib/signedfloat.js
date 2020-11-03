/*==================
[NodeJS] Advanced Random - Signed Float
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine"),
	randomCore = require("./randomcore.js"),
	unsignedFloat = require("./unsignedfloat.js");
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
function signedFloat(option = {}) {
	let runtime = {
		endian: "B"
	};
	if (advancedDetermine.isObjectPair(option) === false) {
		throw new TypeError(`Argument "option" must be type of object pair! ([NodeJS] Advanced Random - Signed Float)`);
	};
	if (typeof option.endian !== "undefined") {
		if (advancedDetermine.isString(option.endian) !== true) {
			throw new TypeError(`Argument "option.endian" must be type of string (non-nullable)! ([NodeJS] Advanced Random - Signed Float)`);
		};
		option.endian = option.endian.toUpperCase();
		if (option.endian !== "B" && option.endian !== "L") {
			throw new RangeError(`Argument "option.endian"'s value is invalid! Only accept "B" and "E". ([NodeJS] Advanced Random - Signed Float)`);
		};
		runtime.endian = option.endian;
	};
	let bin = unsignedFloat(option);
	return ((randomCore(true, 1, runtime.endian) < 0) ? -bin : bin);
};
module.exports = signedFloat;
