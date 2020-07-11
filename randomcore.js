/*==================
[NodeJS] Advanced Random - Random Core
	Language:
		NodeJS 14
==================*/
const crypto = require("crypto");
/**
 * @function randomCore
 * @param {boolean} signed
 * @param {number} byteRange
 * @param {string} endian
 * @returns {number}
 */
function randomCore(signed, byteRange, endian) {
	const signedString = signed ? "" : "U";
	const reader = `read${signedString}Int${endian}E`;
	const byte = crypto.randomBytes(byteRange);
	const result = byte[reader](0, byteRange);
	return result;
};
module.exports = randomCore;
