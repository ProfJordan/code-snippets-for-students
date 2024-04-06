# Cocktail Shaker Sort

----

## About:

Cocktail Shaker Sort, also known as Bidirectional Bubble Sort, is a variation of the Bubble Sort sorting algorithm. The main difference is that Cocktail Shaker Sort traverses the array in both directions alternatively. This means that each iteration of the algorithm consists of two passes through the array: one forwards, moving the largest element to the end, and one backwards, moving the smallest element to the beginning. This bidirectional approach can be more efficient for certain types of data, as it can reduce the number of passes needed to fully sort the array.

In this implementation, the swapped flag is used to keep track of whether any elements were swapped during a pass. The algorithm performs a forward pass, swapping adjacent elements if they are in the wrong order. If no swaps are made during a pass, the array is considered sorted, and the algorithm terminates. Otherwise, a backward pass is performed with the same swapping logic. This process repeats, with the range of the passes narrowing with each iteration until no swaps are made, indicating that the array is fully sorted.

Cocktail Shaker Sort improves upon Bubble Sort by more efficiently handling elements that need to be moved a long distance toward either the beginning or the end of the list. However, like Bubble Sort, it is not very efficient for large datasets compared to more advanced sorting algorithms.

----

## Run Times:

- **Best-case:** \(O(n)\)
- **Average-case:** \(O(n^2)\)
- **Worst-case:** \(O(n^2)\)

