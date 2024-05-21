function gnomeSort(arr) {
    let i = 0;
    while (i < arr.length) {
        if (i === 0 || arr[i - 1] <= arr[i]) {
            i++;
        } else {
            // Swap the elements
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            i--;
        }
    }
    return arr;
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", gnomeSort(array));
