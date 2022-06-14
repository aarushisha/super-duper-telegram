/**
 * Keep track of letter counts in string 1 and then go through string 2 and check against count, check for any mismatches or leftovers in count
 * 
 * N = |str| && M = |str2|
 * Time: O(N + M)
 * Additional Space: O(N) // only creating object for first str
 * @param {string[]} str
 * @param {string[]} str2
 * @return {boolean}
 */
const checkPermutation = (str, str2) => {
    // to check if permutation, have to have the same letter counts
    // loop through first string and add counts to object
    // loop through second string and decreate counts, check for empty object at end
    if (str.length !== str2.length) {
        return false;
    }
    let charCounts = {};
    for (let i = 0; i < str.length; i++) {
        if (charCounts[str[i]]) {
            charCounts[str[i]]++;
        } else {
            charCounts[str[i]] = 1;
        }
    }
    for (let j = 0; j < str2.length; j++) {
        let count = charCounts[str2[j]];
        if (!count) {
            return false;
        }
        if (count === 1) {
            delete charCounts[str2[j]];
        } else {
            charCounts[str2[j]]--;
        }
    }
    return Object.keys(charCounts).length === 0;
}

/**
 * First sort the strings and then check if they are identical
 * 
 * N = |str| && M = |str2|
 * Time: O(N log N + M log M) // need to sort and then iterate through one of them
 * Additional Space: O(1) if able to modify original strings, O(N + M) otherwise
 * @param {string[]} str
 * @param {string[]} str2
 * @return {boolean}
 */
const checkPermutationSorted = (str, str2) => {
    if (str.length !== str2.length) {
        return false;
    }
    str.sort();
    str2.sort();

    return str.every((value, index) => value === str2[index]);
}

console.log(checkPermutationSorted(["j", "a", "m"], ["m", "a", "j"]));