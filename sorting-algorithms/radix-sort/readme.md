# Radix Sort

----

## About:

Radix Sort is a non-comparative integer sorting algorithm that sorts data with integer keys by grouping keys by the individual digits which share the same significant position and value. A positional notation is required, but because integers can represent strings of characters (e.g., names or dates) and specially formatted floating point numbers, radix sort is not limited to integers.

Radix Sort works by processing individual digits of integer numbers, from the least significant digit (LSD) to the most significant digit (MSD). It uses counting sort or a similar stable sorting algorithm as a subroutine to sort the elements based on each digit.

This implementation sorts an array of integers using Radix Sort. It starts by finding the maximum number in the array to determine the maximum number of digits. Then, it applies a modified counting sort to each digit position, starting from the least significant digit and moving to the most significant digit.


----

## Run Times:

- **Best-case:** \(O(nk)\)
- **Average-case:** \(O(nk)\)
- **Worst-case:** \(O(nk)\)
