/*==================
[NodeJS] Advanced Random - Random Core
	Language:
		NodeJS/10.13.0
==================*/
const crypto = require("crypto");
/**
 * @private
 * @function randomCore
 * @param {boolean} [signed=false]
 * @param {number} [byteRange=1]
 * @param {string} [endian="B"]
 * @returns {number}
 */
function randomCore(signed = false, byteRange = 1, endian = "B") {
	return crypto.randomBytes(byteRange)[`read${signed ? "" : "U"}Int${endian}E`](0, byteRange);
};
module.exports = randomCore;
