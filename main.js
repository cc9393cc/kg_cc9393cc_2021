/*
Convert an array of integers into an array of strings representing the phonetic equivalent of the integer.
Time complexity is O (M * N), M is the number of integers, N is the average length of integers.
Space complexity is O (M * N) 
*/

// Check whether the input is number
const isNumber = (num) => {
    return !isNaN(num) && isFinite(num);
}

// Transfer integer to phonetic equivalent recursively
const numToPhonetic = (num) => {
    // the hashmap of number and string
    const phoneticMap = {
        0: 'Zero',
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
    };
    // Check whether the input is number
    if (!isNumber(num)) {
        return '';
    }
    // Base case: get the phonetic equivalent
    if (num >= 0 && num <= 9) {
        return phoneticMap[num];
    }
    // Recursively transfer the number
    return numToPhonetic(Math.floor(num / 10)) + phoneticMap[num % 10];
}

// Main function
const main = () => {
    // Read the arguments from command line
    const args = process.argv.slice(2);
    // Create the result list
    const res = [];
    // Read each number
    for (let i = 0; i < args.length; i++) {
        // Push the phonetic equivalent of the integer into result list
        res.push(numToPhonetic(args[i]));
    }
    // Stdout the result
    console.log(res.join(','));
}
// Run the main function
main();