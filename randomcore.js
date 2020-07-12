/*==================
[NodeJS] Advanced Random - Random Core
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const crypto = require("crypto");
const internalService = require("./internalservice.js");
/**
 * @function randomCore
 * @param {boolean} signed
 * @param {number} byteRange
 * @param {string} [endian]
 * @returns {number}
 */
function randomCore(signed, byteRange, endian = "B") {
	if (advancedDetermine.isString(endian) != true) {
		return internalService.typeError(`Invalid type of "configuration.endian"! Require type of string.`);
	};
	endian = endian.toUpperCase();
	if (endian !== "B" && endian !== "L") {
		return internalService.referenceError(`Invalid reference of "configuration.endian"! (Read the documentation for more information.)`);
	};
	const signedString = signed ? "" : "U";
	const reader = `read${signedString}Int${endian}E`;
	const byte = crypto.randomBytes(byteRange);
	const result = byte[reader](0, byteRange);
	return result;
};
module.exports = randomCore;
