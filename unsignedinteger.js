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
		endian: "B",
		method: "set",
		range: 1e16
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
		if (typeof option.method != "undefined") {
			if (advancedDetermine.isString(option.method) != true) {
				return internalService.prefabTypeError("option.method", "string");
			}
			runtime.method = option.method.toLowerCase();
		}
		if (typeof option.range != "undefined") {
			if (advancedDetermine.isNumberPositiveInteger(option.range) == true && option.range >= 2 && option.range <= runtime.range) {
				runtime.range = option.range;
			} else {
				return internalService.prefabTypeError("option.range", `positive integer number, >= 2, and <= ${runtime.range}`);
			}
		}
	}
	if (runtime.method === "set") {
		runtime.method = runtime.range <= internalService.rdBytes3 ? "smallset" : "bigset";
	}
	let result = 0;
	switch (runtime.method) {
		case "digit":
			const digitModuleCount = runtime.range.toString().length;
			for (let index = 0; index < digitModuleCount; index++) {
				result = result * 10 + (Math.ceil(((randomCore(false, 1, runtime.endian) + 1) / internalService.rdBytes1) * 10) - 1);
			}
			result = Math.ceil(((result + 1) / Math.pow(10, digitModuleCount)) * runtime.range) - 1;
			break;
		case "small_set":
		case "smallset":
			const smallSetModuleCount = Math.ceil(runtime.range / internalService.rdBytes1);
			for (let index = 0; index < smallSetModuleCount; index++) {
				result += randomCore(false, 1, runtime.endian) + 1;
			}
			result = Math.ceil((result / (internalService.rdBytes1 * smallSetModuleCount)) * runtime.range) - smallSetModuleCount;
			break;
		case "big_set":
		case "bigset":
			const bigSetModuleCount = Math.ceil(runtime.range / internalService.rdBytes6);
			for (let index = 0; index < bigSetModuleCount; index++) {
				result += randomCore(false, 6, runtime.endian) + 1;
			}
			result = Math.ceil((result / (internalService.rdBytes6 * bigSetModuleCount)) * runtime.range) - bigSetModuleCount;
			break;
		default:
			return internalService.prefabReferenceError("option.method");
			break;
	}
	return result;
}
module.exports = unsignedInteger;
