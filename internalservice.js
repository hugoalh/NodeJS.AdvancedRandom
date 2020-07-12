/*==================
[NodeJS] Advanced Random - Internal Service
	Language:
		NodeJS 14
==================*/
const configuration = require("./configuration.js");
/**
 * @const {number} rdBytes1
 */
const rdBytes1 = Math.pow(256, 1);
/**
 * @const {number} rdBytes2
 */
const rdBytes2 = Math.pow(256, 2);
/**
 * @const {number} rdBytes3
 */
const rdBytes3 = Math.pow(256, 3);
/**
 * @const {number} rdBytes4
 */
const rdBytes4 = Math.pow(256, 4);
/**
 * @const {number} rdBytes5
 */
const rdBytes5 = Math.pow(256, 5);
/**
 * @const {number} rdBytes6
 */
const rdBytes6 = Math.pow(256, 6);
/**
 * @function generalError
 * @param {string} message
 * @returns {undefined}
 */
function generalError(message) {
	if (configuration.ignoreGeneralError() == true) {
		console.error(message);
		return undefined;
	};
	throw new Error(message);
};
/**
 * @function rangeError
 * @param {string} message
 * @returns {undefined}
 */
function rangeError(message) {
	if (configuration.ignoreRangeError() == true) {
		console.error(message);
		return undefined;
	};
	throw new RangeError(message);
};
/**
 * @function referenceError
 * @param {string} message
 * @returns {undefined}
 */
function referenceError(message) {
	if (configuration.ignoreReferenceError() == true) {
		console.error(message);
		return undefined;
	};
	throw new ReferenceError(message);
};
/**
 * @function typeError
 * @param {string} message
 * @returns {undefined}
 */
function typeError(message) {
	if (configuration.ignoreTypeError() == true) {
		console.error(message);
		return undefined;
	};
	throw new TypeError(message);
};
module.exports.rdBytes1 = rdBytes1;
module.exports.rdBytes2 = rdBytes2;
module.exports.rdBytes3 = rdBytes3;
module.exports.rdBytes4 = rdBytes4;
module.exports.rdBytes5 = rdBytes5;
module.exports.rdBytes6 = rdBytes6;
module.exports.generalError = generalError;
module.exports.rangeError = rangeError;
module.exports.referenceError = referenceError;
module.exports.typeError = typeError;
