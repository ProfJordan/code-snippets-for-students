# Tim Sort

----

## About:

Tim Sort is a sophisticated sorting algorithm derived from merge sort and insertion sort, designed to perform well on many kinds of real-world data. It's the default sorting algorithm in Python (for lists) and Java (for objects that implement the Comparable interface), among others. Tim Sort takes advantage of already sorted sequences in the data to optimize the sorting process, making it extremely efficient for partially sorted arrays.

Implementing Tim Sort from scratch can be quite complex due to its optimization strategies, but I'll break down the core concepts and provide a simplified version that captures the essence of Tim Sort:

1. Identify or create small segments of the array that are already sorted (runs).
2. Use Insertion Sort to sort small segments of the array (typically 32 or 64 elements).
3. Merge sorted segments using Merge Sort, doubling the size of the sorted segments in each merge step.

### This code follows the basic principles of Tim Sort:

- It first sorts small chunks of the array using Insertion Sort, with these chunks determined by the *RUN* size.
- It then merges these sorted chunks together, doubling the size of the segments being merged with each iteration, until the whole array is sorted.

Remember, the actual Tim Sort algorithm includes more optimizations for identifying and merging runs, and for dealing with arrays of different sizes and types, making it highly effective for real-world datasets.

----

## Run Times:

- **Best-case:** \(O(n)\)
- **Average-case:** \(O(n \log n)\)
- **Worst-case:** \(O(n \log n)\)
