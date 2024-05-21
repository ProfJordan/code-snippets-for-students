# Insertion Sort

----

## About:

Insertion Sort is a simple and intuitive sorting algorithm. It builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heap sort, or merge sort. However, it has several advantages:

- Simple implementation
- Efficient for (quite) small data sets, much like other quadratic sorting algorithms
- More efficient in practice than most other simple quadratic algorithms such as selection sort or bubble sort
- Adaptive, i.e., efficient for data sets that are already substantially sorted.
  - If the input is nearly sorted, insertion sort can be faster than more advanced algorithms such as quicksort.
- Stable; does not change the relative order of elements with equal keys
- In-place;  requires no extra memory space

The algorithm works by iterating from the second element of the array until the last element. At each iteration, it compares the current element with its predecessor. If the current element is smaller than its predecessor, it compares it with the elements before. The process continues until it finds an element smaller than the current one or reaches the beginning of the array. At that point, it inserts the current element at its correct position, and moves all larger elements one position up to make space for it.

This implementation iterates through the array, expanding the sorted portion of the array one element at a time, and inserting each new element into its appropriate position within the sorted part.

----

## Run Times:

- **Best-case:** \(O(n)\)
- **Average-case:** \(O(n^2)\)
- **Worst-case:** \(O(n^2)\)
