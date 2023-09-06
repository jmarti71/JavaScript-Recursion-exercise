function fibonacciIterative (n) {
    let a = 0;
    let arr = [];

    for(let i = 0; i < n; i++) {
        if(i <= 1) {
            a = i;
            arr.push(a);
        } 
        else if (i > 1) {
            a = arr[arr.length - 1] + arr[arr.length - 2];
            arr.push(a);
        }
    }
}


let array = [0,1];
function fibonacciRecursive(n) {
    if(n <= 2){ 
        return;
    }
    else {
        let a = array[array.length - 1] + array[array.length - 2];
        array.push(a);
        fibonacciRecursive(n - 1);
    }
}

fibonacciIterative(8);
fibonacciRecursive(8);