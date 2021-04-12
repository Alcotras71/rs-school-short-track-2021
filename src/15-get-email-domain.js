/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const reg = /.*@/gi;
  const result = email.replace(reg, '');
  return result;
}

module.exports = getEmailDomain;
