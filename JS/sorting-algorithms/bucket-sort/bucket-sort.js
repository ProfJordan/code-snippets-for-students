function bucketSort(arr, bucketSize) {
    if (arr.length === 0) {
        return arr;
    }

    // Determine minimum and maximum values
    let i;
    let minValue = arr[0];
    let maxValue = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]; // Input's min value
        } else if (arr[i] > maxValue) {
            maxValue = arr[i]; // Input's max value
        }
    }

    // Initialize buckets
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    // Distribute input array values into buckets
    for (i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    // Sort each bucket and collect them all together
    arr.length = 0;
    for (i = 0; i < buckets.length; i++) {
        buckets[i].sort((a, b) => a - b); // Sort buckets
        for (let j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);
        }
    }

    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bucketSort(array, 0.1));