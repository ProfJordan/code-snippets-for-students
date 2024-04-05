function countingSort(arr) {
    if (arr.length === 0) return arr; // Early return for empty array

    let n = arr.length;
    let maxValue = Math.max(...arr); // Find the maximum value in the array dynamically
    let count = new Array(maxValue + 1).fill(0);
    let output = new Array(n).fill(0);

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
    // Moving backwards to make the sort stable.
    for (let i = n - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    // Copy the output array back to the input array
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }

    return arr; // Return the sorted array
}

// Example usage without needing to specify maxValue:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", countingSort(array));
