function alternatingSums(a) {
    let sum_odd = sum_even = 0;
    n = a.length;
    for (let i = 0; i < n; i++){
        if (i % 2 == 0){
            sum_odd += a[i];
        }
        else {
            sum_even += a[i];
        }
    }
    return [sum_odd, sum_even];
}
