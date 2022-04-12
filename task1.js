/**
 * Function to return all the longest strings in an array
 * @param {Array} inputArray - Array of input strings
 * @returns {Array} res - Array of all the longest strings
 */
function allLongestStrings(inputArray){
    let n = inputArray.length;
    max = inputArray[0].length;
    // Getting the length of the longest string in the array
    for (let i = 1; i < n; i++){
        if (max < inputArray[i].length) {
            max = inputArray[i].length;
        }
    }
    res = [];
    // Pushing all the strings with the length equal to max into the result
    for (let i = 0; i < n; i++){
        if (inputArray[i].length == max){
            res.push(inputArray[i]);
        }
    }
    return res;
}