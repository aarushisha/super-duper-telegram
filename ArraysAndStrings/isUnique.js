/**
 * Keep track of seen characters in an object, fail when a repeated character is found
 * 
 * Time: O(N) // in case where there are no duplicates or duplicates are at the very end, have to go through the entire string
 * Space: O(N) // have to create an object with keys that are char in string, worst case the object is the same size as string
 * 
 * @param {string[]} string String to check, passed in as a character array
 * @return {boolean}
 */
const isUnique = (string) => {
    let charCounts = {}
    for (let i = 0; i < string.length; i++) {
        if (charCounts[string[i]]) {
            return false;
        }
        charCounts[string[i]] = true;
    }
    return true;
}

/**
 * Don't create another data structure, sort through the string and then iterate through it to see if any neighbors are the same
 * 
 * Time: O(N log N)
 * Space: O(1
 * )
 * @param {string[]} string String to check, passed in as a character array
 * @return {boolean} 
 */
const isUniqueTwo = (string) => {
    // sort string and see if any neighbors are the same
    string.sort();
    for (let i = 1; i < string.length; i++) {
        if (string[i] === string[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(isUniqueTwo(["a", "r", "u", "s", "h", "i", "a"]));