function countingSort(arr, maxValue) {
    let n = arr.length;
    let count = new Array(maxValue + 1).fill(0);
    let output = new Array(n);

    // Store the count of each element
    for (let i = 0; i < n; i++) {
        count[arr[i]]++;
    }

    // Change count[i] so that count[i] now contains the actual
    // position of this element in output array
    for (let i = 1; i <= maxValue; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = n - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    // Copy the output array to arr, so that arr now
    // contains sorted elements
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }

    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", countingSort(array, 8)); // Assuming 8 is the max value in the array
