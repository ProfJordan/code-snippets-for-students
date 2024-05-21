function cocktailShakerSort(arr) {
    let swapped;
    do {
        // Initialize swapped as false at the start of the loop
        swapped = false;

        // Forward pass: move larger elements to the end
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }

        // If no elements were swapped, then the array is sorted
        if (!swapped) break;

        // Otherwise, reset swapped to false for the backward pass
        swapped = false;

        // Backward pass: move smaller elements to the beginning
        for (let i = arr.length - 2; i >= 0; i--) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }

        // The loop continues until no swaps are made in either pass
    } while (swapped);

    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", cocktailShakerSort(array));
