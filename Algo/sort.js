function bubbleSort(arr){
    for(var i=0; i<arr.length; i++){
        for(var j=1; j<arr.length-i; j++){
           if(arr[j-1]>arr[j]){
               let temp = arr[j];
               arr[j]= arr[j-1];
               arr[j-1]= temp;
           } 
        }
    }
    return arr
}

var arr = [1,4,2,3,5];

console.log(bubbleSort(arr));