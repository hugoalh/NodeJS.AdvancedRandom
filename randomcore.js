/*==================
[NodeJS] Advanced Random - Random Core
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const crypto = require("crypto");
const internalService = require("./internalservice.js");
/**
 * @private
 * @function randomCore
 * @param {boolean} [signed=false]
 * @param {number} [byteRange=1]
 * @param {string} [endian="B"]
 * @returns {number}
 */
function randomCore(signed = false, byteRange = 1, endian = "B") {
	if (advancedDetermine.isString(endian) != true) {
		return internalService.prefabTypeError("option.endian", "string");
	};
	endian = endian.toUpperCase();
	if (endian !== "B" && endian !== "L") {
		throw new ReferenceError(`Invalid reference of "option.endian"! (Read the documentation for more information.)`);
	};
	const signedString = signed ? "" : "U";
	const reader = `read${signedString}Int${endian}E`;
	const byte = crypto.randomBytes(byteRange);
	const result = byte[reader](0, byteRange);
	return result;
};
module.exports = randomCore;
