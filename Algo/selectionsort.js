function selectionsort(arr){
    for(let i = 0; i<arr.length; i++){
        let bigidx = 0;
        let bignum = arr[0];
        for(let j = 1; j<arr.length-i; j++){
            if(arr[j]> bignum){
                bignum = arr[j];
                bigidx = j;
            }
        }
    }
    let temp = arr[bigidx]
    arr[bigidx] = arr[arr.length-1-i];
    arr[arr.length-1-i]= temp;
}

selectionsort([6,4,5,2,9,3,8])