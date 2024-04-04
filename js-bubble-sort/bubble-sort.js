function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            // Compare the adjacent positions
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true; // Keep track if any swap happened
            }
        }
        // If no two elements were swapped by inner loop, then break
    } while (swapped);
    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(array));
