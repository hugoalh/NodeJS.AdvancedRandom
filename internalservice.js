/*==================
[NodeJS] Advanced Random - Internal Service
	Language:
		NodeJS 14
==================*/
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
 * @private
 * @function prefabNoInputError
 * @param {string} argumentName
 * @returns {Error}
 */
function prefabNoInputError(argumentName) {
	throw new Error(`No input of "${argumentName}"!`);
}
/**
 * @private
 * @function prefabReferenceError
 * @param {string} argumentName
 * @param {string} [description="(Read the documentation for more information.)"]
 * @returns {ReferenceError}
 */
function prefabReferenceError(argumentName, description = "(Read the documentation for more information.)") {
	throw new ReferenceError(`Invalid reference of "${argumentName}"! ${description}`);
}
/**
 * @private
 * @function prefabTypeError
 * @param {string} argumentName
 * @param {string} typeCondition
 * @returns {TypeError}
 */
function prefabTypeError(argumentName, typeCondition) {
	throw new TypeError(`Invalid type of "${argumentName}"! Require type of ${typeCondition}.`);
}
module.exports.rdBytes1 = rdBytes1;
module.exports.rdBytes2 = rdBytes2;
module.exports.rdBytes3 = rdBytes3;
module.exports.rdBytes4 = rdBytes4;
module.exports.rdBytes5 = rdBytes5;
module.exports.rdBytes6 = rdBytes6;
module.exports.prefabNoInputError = prefabNoInputError;
module.exports.prefabReferenceError = prefabReferenceError;
module.exports.prefabTypeError = prefabTypeError;
