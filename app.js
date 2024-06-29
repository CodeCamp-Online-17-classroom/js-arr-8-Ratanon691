function lessThan0(arr) {
for (i = 0 ; i < arr.length ; i++){
  if(arr[i] < 0){
    console.log(arr[i])
    break
  }
}
}
const nums = [7, 9, -5, -1, 0, 3];
// expexted result: -5
