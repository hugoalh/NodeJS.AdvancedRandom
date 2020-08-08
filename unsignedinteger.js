/*==================
[NodeJS] Advanced Random - Unsigned Integer
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("./internalservice.js");
const randomCore = require("./randomcore.js");
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
function unsignedInteger(option) {
	let runtime = {
		method: "set",
		range: 1e16
	};
	if (advancedDetermine.isObjectPair(option) == true) {
		if (typeof option.method != "undefined") {
			if (advancedDetermine.isString(option.method) != true) {
				return internalService.typeError(`Invalid type of "option.method"! Require type of string.`);
			};
			runtime.method = option.method.toLowerCase();
		};
		if (typeof option.range != "undefined") {
			if (advancedDetermine.isNumberPositiveInteger(option.range) == true && option.range >= 2 && option.range <= runtime.range) {
				runtime.range = option.range;
			} else {
				return internalService.typeError(`Invalid type of "option.range"! Require type of positive integer number, >= 2, and <= ${runtime.range}.`);
			};
		};
	};
	if (runtime.method === "set") {
		if (runtime.range <= internalService.rdBytes3) {
			runtime.method = "smallset";
		} else {
			runtime.method = "bigset";
		};
	};
	let result = 0;
	switch (runtime.method) {
		case "digit":
			const digitModuleCount = runtime.range.toString().length;
			for (let index = 0; index < digitModuleCount; index++) {
				const element = randomCore(false, 1, option.endian) + 1;
				const digit = Math.ceil((element / internalService.rdBytes1) * 10) - 1;
				result = result * 10 + digit;
			};
			result = Math.ceil(((result + 1) / Math.pow(10, digitModuleCount)) * runtime.range) - 1;
			break;
		case "small_set":
		case "smallset":
			const smallSetModuleCount = Math.ceil(runtime.range / internalService.rdBytes1);
			for (let index = 0; index < smallSetModuleCount; index++) {
				result += (randomCore(false, 1, option.endian) + 1);
			};
			result = Math.ceil((result / (internalService.rdBytes1 * smallSetModuleCount)) * runtime.range) - smallSetModuleCount;
			break;
		case "big_set":
		case "bigset":
			const bigSetModuleCount = Math.ceil(runtime.range / internalService.rdBytes6);
			for (let index = 0; index < bigSetModuleCount; index++) {
				result += (randomCore(false, 6, option.endian) + 1);
			};
			result = Math.ceil((result / (internalService.rdBytes6 * bigSetModuleCount)) * runtime.range) - bigSetModuleCount;
			break;
		default:
			return internalService.referenceError(`Invalid reference of "option.method"! (Read the documentation for more information.)`);
			break;
	};
	return result;
};
module.exports = unsignedInteger;
