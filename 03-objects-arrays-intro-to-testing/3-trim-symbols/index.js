/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if (size === undefined) {
        return string;
    }
    if (!string.length || size === 0) {
        return '';
    }
    let counter;
    return string
        .split('')
        .reduce((acc, char, i, initialArray) => {
            if (initialArray[i - 1] === char) {
                counter++;
            } else {
                counter = 1;
            }
            if (counter <= size) {
                return acc.concat(char);
            }
            return acc;
        }, [])
        .join('');
}