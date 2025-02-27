/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  domains.forEach((el) => {
    const arr = el.split('.');
    let key = '';
    for (let i = arr.length - 1; i >= 0; i--) {
      key += `.${arr[i]}`;
      result[key] = result[key] ? (result[key] += 1) : 1;
    }
  });
  return result;
}

module.exports = getDNSStats;
