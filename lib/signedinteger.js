/*==================
[NodeJS] Advanced Random - Signed Integer
	Language:
		NodeJS/10.0.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
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
function signedInteger(option = {}) {
	let runtime = {
		endian: "B"
	};
	if (advancedDetermine.isObjectPair(option) === false) {
		throw new TypeError(`Argument "option" must be type of object pair! ([NodeJS] Advanced Random - Signed Integer)`);
	};
	if (typeof option.endian !== "undefined") {
		if (advancedDetermine.isString(option.endian) !== true) {
			throw new TypeError(`Argument "option.endian" must be type of string (non-nullable)! ([NodeJS] Advanced Random - Signed Integer)`);
		};
		option.endian = option.endian.toUpperCase();
		if (option.endian !== "B" && option.endian !== "L") {
			throw new RangeError(`Argument "option.endian"'s value is invalid! Only accept "B" and "E". ([NodeJS] Advanced Random - Signed Integer)`);
		};
		runtime.endian = option.endian;
	};
	let bin = unsignedInteger(option);
	return (
		(randomCore(true, 1, runtime.endian) < 0) ? -bin : bin
	);
};
module.exports = signedInteger;
