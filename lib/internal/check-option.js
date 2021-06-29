const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @private
 * @function checkOption
 * @param {*} option
 * @returns {void}
 */
function checkOption(option) {
	if (advancedDetermine.isObjectPair(option) === false) {
		throw new TypeError(`Argument "option" must be type of object pair!`);
	};
};
module.exports = checkOption;
