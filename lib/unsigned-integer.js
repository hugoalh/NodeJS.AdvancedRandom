const advancedDetermine = require("@hugoalh/advanced-determine"),
	internalRandom = require("./internal/random.js");
/**
 * @function unsignedInteger
 * @alias uInt
 * @alias uInteger
 * @description Give a random unsigned integer number in the given range.
 * @param {object} [option] Option.
 * @param {string} [option.endian="B"] Endian.
 * @param {string} [option.method="set"] Method.
 * @param {number} [option.range=1e16] Range.
 * @returns {number} A random unsigned integer number.
 */
function unsignedInteger(option = {}) {
	let runtime = {
		endian: "B",
		method: "set",
		range: 1e16
	};
	if (advancedDetermine.isObjectPair(option) === false) {
		throw new TypeError(`Argument "option" must be type of object pair!`);
	};
	if (typeof option.endian !== "undefined") {
		if (advancedDetermine.isString(option.endian) !== true) {
			throw new TypeError(`Argument "option.endian" must be type of string (non-nullable)!`);
		};
		option.endian = option.endian.toUpperCase();
		if (option.endian !== "B" && option.endian !== "L") {
			throw new RangeError(`Argument "option.endian"'s value is invalid! Only accept "B" and "E".`);
		};
		runtime.endian = option.endian;
	};
	if (typeof option.method !== "undefined") {
		if (advancedDetermine.isString(option.method) !== true) {
			throw new TypeError(`Argument "option.method" must be type of string (non-nullable)!`);
		};
		runtime.method = option.method.toLowerCase();
	};
	if (typeof option.range !== "undefined") {
		if (advancedDetermine.isNumberPositiveInteger(option.range) !== true) {
			throw new TypeError(`Argument "option.range" must be type of positive integer number!`);
		};
		if (option.range < 2 || option.range > runtime.range) {
			throw new RangeError(`Argument "option.range"'s value must between 2 and ${runtime.range}.`);
		};
		runtime.range = option.range;
	};
	if (runtime.method === "set") {
		runtime.method = (runtime.range <= Math.pow(256, 3)) ? "smallset" : "bigset";
	};
	let result = 0;
	switch (runtime.method) {
		case "digit":
			let digitModuleCount = runtime.range.toString().length;
			for (let index = 0; index < digitModuleCount; index++) {
				result = result * 10 + (Math.ceil(((internalRandom(false, 1, runtime.endian) + 1) / Math.pow(256, 1)) * 10) - 1);
			};
			result = Math.ceil(((result + 1) / Math.pow(10, digitModuleCount)) * runtime.range) - 1;
			break;
		case "small_set":
		case "smallset":
			let smallSetModuleCount = Math.ceil(runtime.range / Math.pow(256, 1));
			for (let index = 0; index < smallSetModuleCount; index++) {
				result += (internalRandom(false, 1, runtime.endian) + 1);
			};
			result = Math.ceil((result / (Math.pow(256, 1) * smallSetModuleCount)) * runtime.range) - smallSetModuleCount;
			break;
		case "big_set":
		case "bigset":
			let bigSetModuleCount = Math.ceil(runtime.range / Math.pow(256, 6));
			for (let index = 0; index < bigSetModuleCount; index++) {
				result += (internalRandom(false, 6, runtime.endian) + 1);
			};
			result = Math.ceil((result / (Math.pow(256, 6) * bigSetModuleCount)) * runtime.range) - bigSetModuleCount;
			break;
		default:
			throw new RangeError(`Argument "option.method"'s value is not in the method list!`);
	};
	return result;
};
module.exports = unsignedInteger;
