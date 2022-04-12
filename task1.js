function allLongestStrings(inputArray){
    let n = inputArray.length;
    max = inputArray[0].length;
    for (let i = 1; i < n; i++){
        if (max < inputArray[i].length) {
            max = inputArray[i].length;
        }
    }
    res = [];
    for (let i = 0; i < n; i++){
        if (inputArray[i].length == max){
            res.push(inputArray[i]);
        }
    }
    return res;
}