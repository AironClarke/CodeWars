// DESCRIPTION:
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    return arr.every(item => !isNaN(item)) ? arr.filter(item => item % 2 !== 0).reduce((acc,curr) => acc += Math.pow(curr,3),0) : undefined
}