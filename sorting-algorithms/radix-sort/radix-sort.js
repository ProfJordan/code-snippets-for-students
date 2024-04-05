function countingSortForRadix(arr, size, digitPlace) {
    let output = new Array(size).fill(0);
    let count = new Array(10).fill(0);
    let i;

    // Count the occurrences of each digit in digitPlace
    for (i = 0; i < size; i++) {
        count[Math.floor(arr[i] / digitPlace) % 10]++;
    }

    // Change count[i] so it contains the actual position of this digit in output[]
    for (i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (i = size - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / digitPlace) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / digitPlace) % 10]--;
    }

    // Copy the output array to arr[], so that arr[] now
    // contains sorted numbers according to current digit
    for (i = 0; i < size; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    const max = Math.max(...arr);
    // Determine the number of digits in the largest number
    const numDigits = Math.floor(Math.log10(max)) + 1;

    let digitPlace = 1;
    for (let i = 0; i < numDigits; i++) {
        countingSortForRadix(arr, arr.length, digitPlace);
        digitPlace *= 10;
    }

    return arr;
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", radixSort(array));
