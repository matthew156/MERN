const rotateString = (str, num) =>{
let result = ""
let len = str.length
for(i= len-num; i<len; i++){
  result+= str[i]
}
for(i= 0; i<len-num; i++){
  result+= str[i]
}
console.log(result);
}


rotateString("hello", 2);