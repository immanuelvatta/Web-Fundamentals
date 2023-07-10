function delFront(arr) {
    let first = arr[0];
    //let firstElementArr = arr[0];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== first){
            arr[index] = arr[i];
            index++;
        }
    }
    //arr.length = index;
    arr.pop();
    return arr;
}