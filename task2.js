/**
 * Function to return the sum of odd and even position elements of an array
 * @param {Array} a - The input numbers array
 * @returns {Array} - An array containing the Sum of odd and even elements
 */
function alternatingSums(a) {
    let sum_odd = sum_even = 0;
    n = a.length;
    for (let i = 0; i < n; i++){
        if (i % 2 == 0){
            // calculating the sum of all odd elements
            // JS are 0-indexed, so odd elements will have their index divided by 2
            sum_odd += a[i];
        }
        else {
            // calculating the sum of all even elements
            sum_even += a[i];
        }
    }
    return [sum_odd, sum_even];
}
