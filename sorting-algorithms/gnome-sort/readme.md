# Gnome Sort

----

## About:

Gnome Sort, also known as the Stupid Sort, is a simple sorting algorithm that is similar to insertion sort, but with a simpler implementation. It works by iterating over the array, comparing each pair of adjacent elements and swapping them if they are in the wrong order. The algorithm then moves one position backwards and repeats the comparison. When an element is in the correct order, the algorithm moves one step forward. This process continues until the algorithm reaches the end of the array.

The gnome sort algorithm is very intuitive: it starts at the beginning of the array and moves forward through the array, comparing each pair of elements. If the algorithm finds that the current pair of elements is in the wrong order, it swaps them and steps one element back to compare the previous pair of elements, continuing this process until it can move forward again. This ensures that the sorted elements "bubble" to their correct position from left to right.

----

## Run Times:

- **Best-case:** \(O(n)\)
- **Average-case:** \(O(n^2)\)
- **Worst-case:** \(O(n^2)\)
