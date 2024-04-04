# Sorting Algorithms
Examples of sorting Algorithms in JS.

## TODO:

Additional Algorithms to Add.

There are many sorting algorithms beyond the examples here. Each has its own set of advantages, disadvantages, and use-cases where it is most suitable. Here's a brief overview of some additional sorting algorithms:

### Counting Sort

Counting Sort is an integer sorting algorithm that operates by counting the number of objects that have each distinct key value. It's efficient if the range of input data is not significantly greater than the number of objects to be sorted. It's not a comparison-based sort and has a linear time complexity \(O(n+k)\), where \(n\) is the number of elements and \(k\) is the range of input.

### Radix Sort

Radix Sort is a non-comparative integer sorting algorithm that sorts data with integer keys by grouping keys by the individual digits which share the same significant position and value. It works on the principle of Counting Sort and sorts the data digit by digit starting from least significant digit to most significant digit. Radix sort has a time complexity of \(O(nk)\), where \(n\) is the number of elements and \(k\) is the number of passes of the sorting algorithm.

### Bucket Sort

Bucket Sort, or Bin Sort, operates by partitioning an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sort algorithm. It is mainly useful when the input is uniformly distributed over a range. The average time complexity is \(O(n+k)\), where \(n\) is the number of elements and \(k\) is the number of buckets.

### TimSort

TimSort is a hybrid stable sorting algorithm, derived from merge sort and insertion sort, designed to perform well on many kinds of real-world data. It was implemented in 2002 by Tim Peters for the Python programming language. The algorithm finds subsequences of the data that are already ordered (run) and uses them to sort the remainder more efficiently. Its worst-case time complexity is \(O(n \log n)\).

### Cocktail Shaker Sort

Cocktail Shaker Sort, also known as Bidirectional Bubble Sort, Cocktail Sort, Shaker Sort (which can also refer to a variant of Selection Sort), Ripple Sort, Shuttle Sort, or Happy Hour Sort, is an extension of Bubble Sort. The algorithm extends bubble sort by operating in two directions. While it improves on bubble sort by more quickly moving items to their final position, it still has a worst-case time complexity of \(O(n^2)\).

### Gnome Sort

Gnome Sort, also called Stupid sort, is simple to understand and can be seen as a variant of insertion sort in which moving an element to its proper place is accomplished by a series of swaps, as in bubble sort. The average and worst-case time complexity is \(O(n^2)\).

### Comb Sort

Comb Sort is a relatively simple sorting algorithm originally designed to improve upon bubble sort by eliminating turtles, or small values near the end of the list, since in a bubble sort these slow the sorting down tremendously. Rabbits, large values around the beginning of the list, do not pose a problem in bubble sort. In comb sort, the gap between elements is reduced by a factor (the shrink factor) on each pass until the gap is 1.

Each sorting algorithm has its own niche where it performs the best, and the choice of sorting algorithm can depend on several factors such as the size of the dataset, whether the dataset is mostly sorted or completely random, and the specific constraints of the computing environment (like memory usage).