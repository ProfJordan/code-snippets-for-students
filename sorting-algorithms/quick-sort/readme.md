# Quick Sort

----

## About:

Quick Sort is a highly efficient sorting algorithm and is based on the divide-and-conquer approach. It picks an element as a pivot and partitions the given array around the picked pivot. There are many different versions of quick sort that pick pivot in different ways:

- Always pick the first element as pivot.
- Always pick the last element as pivot (implemented in this example).
- Pick a random element as pivot.
- Pick median as pivot.

### The basic step of sorting an array are as follows:

1. Pick an element, called a pivot, from the array.
2. Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.
3. Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.

This implementation chooses the last element as the pivot. The partition function is used to move all elements smaller than the pivot to the left of the pivot and all greater elements to the right. This process is recursively applied to each sub-array that is created by partitioning around the pivots.

----

## Run Times:

- **Best-case:** \(O(n \log n)\)
- **Average-case:** \(O(n \log n)\)
- **Worst-case:** \(O(n^2)\)
