function combSort(arr) {
    const shrinkFactor = 1.3;
    let gap = arr.length;
    let sorted = false;

    while (!sorted) {
        // Update the gap value for a next comb
        gap = Math.floor(gap / shrinkFactor);
        if (gap <= 1) {
            gap = 1;
            sorted = true; // Last pass over the array
        }

        let i = 0;
        while (i + gap < arr.length) {  
            if (arr[i] > arr[i + gap]) {
                // Swap elements
                let temp = arr[i];
                arr[i] = arr[i + gap];
                arr[i + gap] = temp;
                sorted = false;
            }
            i++;
        }
    }
    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", combSort(array));
