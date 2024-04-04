function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    // Find the middle point to divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle); // Left half
    const right = arr.slice(middle); // Right half

    // Call mergeSort recursively for the left and right halves
    return merge(mergeSort(left), mergeSort(right));
}

// Merge two arrays: left and right
function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // Concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // Move to the next element in the left array
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // Move to the next element in the right array
        }
    }

    // Concatenate the remaining elements (if any) from left and right arrays
    // Note: Only one of these two calls will actually add elements to resultArray
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", mergeSort(array));
