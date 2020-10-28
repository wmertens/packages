const R = require('ramda');
const { capitalize, ensureArray } = require('./utils');
const { get, provider } = require('../app');

/**
 * Utility function generated by {@link getFormater} and that can be used to modify a type name.
 * The difference between the formatter and the modifier is that the formatter can extract single
 * types from a comple type and run them through the modifier, where the modifier can only handle
 * one type.
 *
 * @callback TypeFormatter
 * @param {string} type  The original type.
 * @returns {string}
 */

/**
 * Utility function that is sent to {@link getFormatter} and that the formatter will use to modify
 * each single type name referenced on the given type.
 *
 * @callback TypeModifier
 * @param {string} type  The original type.
 * @returns {string}
 */

/**
 * Generates a formatter function that will replace a type (or types) after sending it through
 * a modification function.
 *
 * @param {string|string[]} type      The type or types to format.
 * @param {TypeModifier}    modifier  The function that will modify each type.
 * @returns {TypeFormatter}
 */
const getFormater = (type, modifier) => R.compose(
  (types) => R.replace(
    new RegExp(`([^\\w]|^)(${types})([^\\w]|$)`, 'g'),
    (_, before, rawType, after) => `${before}${modifier(rawType)}${after}`,
  ),
  R.join('|'),
  get(ensureArray),
)(type);

/**
 * Formats each type reference on a type in order to match the casing allowed by TypeScript.
 *
 * @param {string} type  The type to format.
 * @returns {string}
 */
const formatTSTypes = (type) => {
  const useGetFormatter = get(getFormater);
  return R.compose(
    useGetFormatter(['array', 'object'], get(capitalize)),
    useGetFormatter(['String', 'Number', 'Boolean'], R.toLower),
  )(type);
};

module.exports.formatTSTypes = formatTSTypes;
module.exports.getFormater = getFormater;
module.exports.provider = provider('formatTSTypes', module.exports);
