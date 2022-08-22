// Write your code here:

function fibonacci(n) {
    if (n === 0)
        return [n];
    if (n === 1)
        return [0, 1]
    if (typeof n == typeof 1) {
        n = new Array(n + 1);
        n[0] = 0;
        n[1] = 1;
        return fibonacci(n)
    }
    if (typeof n == typeof [1]) {
        for (i = 2; i < n.length; i++)
            n[i] = (n[i - 1] + n[i - 2])
        return n
    }
}

console.log(fibonacci(0)); // [0]
console.log(fibonacci(1)); // [ 0, 1 ]
console.log(fibonacci(3)); // [ 0, 1, 1, 2 ]
console.log(fibonacci(8)); // [ 0, 1,  1,  2, 3, 5, 8, 13, 21]
