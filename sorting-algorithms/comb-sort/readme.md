# Comb Sort

----

## About:

Comb Sort is an improvement on the Bubble Sort algorithm. Like Bubble Sort, Comb Sort compares pairs of elements and swaps them if they are in the wrong order. The key difference is that Comb Sort starts by comparing elements that are far apart and gradually reduces the gap between the elements to be compared. This approach helps to eliminate turtles (small values near the end of the list) more efficiently than Bubble Sort.

The efficiency of Comb Sort comes from the way it quickly eliminates large gaps between elements, which makes it faster than Bubble Sort, especially on lists with a lot of elements. The gap reduction factor, often referred to as the shrink factor, has a significant impact on the performance of Comb Sort. A common value for the shrink factor is 1.3.

In this implementation, the gap starts as the length of the array and is reduced by the shrink factor in each iteration until it becomes 1. When the gap is 1, Comb Sort behaves like Bubble Sort, but by this time, most turtle elements have been eliminated, making the final pass more efficient. The algorithm stops when a pass over the array results in no swaps, indicating that the array is sorted.

----

## Run Times:

- **Best-case:** \(O(n \log n)\)
- **Average-case:** \(O(n^2/2^p)\) (where \(p\) is the number of increments)
- **Worst-case:** \(O(n^2)\)
