function popFront(arr) {
for(var i=1; i<arr.length; i++) {
arr[i-1] = arr[i]
}
arr.pop();
return(arr)
}

console.log(popFront([5, 93, 22, 4]));
