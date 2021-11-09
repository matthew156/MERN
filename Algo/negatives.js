function maxMinAvg(arr) {
    var results = [];
    var min = 100000;
    var max = 0;
    for (var i = 0; i<arr.length; i++){
        if(arr[i]> max){
            max = arr[i]
        }
    }
    results.push(max)
    for(i = 0; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }
    results.push(min);
    for(i = 0; i<arr.length; i++){
        var sum = 0;
        sum+= arr[i];
        console.log(sum)
    }
    var avg = sum/arr.length
    results.push(avg)
    return results; 
}
maxMinAvg(0,2,4)