/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const sortedArr = arr.concat();
  const collator = new Intl.Collator('ru', {caseFirst: 'upper'});
  return sortedArr.sort((o1, o2) => {
      // eslint-disable-next-line new-cap
      return param === 'asc' ? collator.compare(o1, o2) : -collator.compare(o1, o2);
    }
  );
}
