// In this kata, you will be given a string containing numbers from a to b, one number can be missing from these numbers, then the string will be shuffled, you're expected to return an array of all possible missing numbers.

// Examples (input => output)
// Here's a string with numbers from 1 - 21, its missing one number and the string is then shuffled, your'e expected to return a list of possible missing numbers.

// 1, 21, "2198765123416171890101112131415"  => [ 12, 21 ]
// You won't be able to tell if its 21 or 12, you must return all possible values in an array.

function findNumber(start, stop, string) {
    let allPossibleNums = [];
    for(let i = 0; i < string.length; i++) {
        allPossibleNums.push(Number(string[i]));
        allPossibleNums.push(Number(string[i]+string[i+1]))
    }

    const uniqNums = [...new Set(allPossibleNums)];
    const sortedNums = uniqNums.sort((a, b) => a - b);
    return sortedNums;
  }


console.log(findNumber(1, 21, "2198765123416171890101112131415"));
// it should output: [ 12, 21 ]
