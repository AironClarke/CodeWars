// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

function evenLast(numbers) {
    let x = numbers.filter((item,index) => index % 2 == 0)
    return x.length > 0 ? x.reduce((acc,curr) => acc + curr,0) * numbers[numbers.length-1] : 0
}

//OR

function evenLast(numbers) {
    return numbers.reduce((acc,curr,index) => index % 2 == 0 ? acc += numbers[index] * numbers[numbers.length-1] : acc += 0,0)
}