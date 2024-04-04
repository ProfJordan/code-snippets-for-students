function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        // Partition the array by setting the position of the pivot value 
        const pivotIndex = partition(arr, left, right);
        
        // Sort the left
        quickSort(arr, left, pivotIndex - 1);
        
        // Sort the right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

// Function to find the pivot position and partition the array
function partition(arr, left, right) {
    // Choosing the rightmost element as the pivot
    const pivot = arr[right];
    let i = left - 1;
    
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            // Swapping elements
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    // Putting the pivot value in the middle
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]]
    return i + 1;
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", quickSort(array));
