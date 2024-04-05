# Sorting Algorithms
Examples of sorting Algorithms in JS.

----

## Sorting Algorithms:

### [Bubble sort](./bubble-sort/)

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. Despite its simplicity, Bubble Sort is not very efficient for large datasets compared to more advanced sorting algorithms like Quick Sort or Merge Sort.

### [Bucket Sort](./bucket-sort/)

Bucket Sort, or Bin Sort, operates by partitioning an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sort algorithm. It is mainly useful when the input is uniformly distributed over a range.

### [Comb Sort](./comb-sort/)

Comb Sort is a relatively simple sorting algorithm originally designed to improve upon bubble sort by eliminating turtles, or small values near the end of the list, since in a bubble sort these slow the sorting down tremendously. Rabbits, large values around the beginning of the list, do not pose a problem in bubble sort. In comb sort, the gap between elements is reduced by a factor (the shrink factor) on each pass until the gap is 1.

### [Counting Sort](./counting-sort/)

Counting Sort is an integer sorting algorithm that operates by counting the number of objects that have each distinct key value. It's efficient if the range of input data is not significantly greater than the number of objects to be sorted.

### [Heap sort](./heap-sort/)

Heap Sort is a popular and efficient sorting algorithm in computer science. The entire sorting algorithm is based on the binary heap data structure. It works by visualizing the elements of the array as a special kind of complete binary tree called a heap.

### [Insertion Sort](./insertion-sort/)

Insertion Sort is a simple and intuitive sorting algorithm. It builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heap sort, or merge sort.

### [Merge Sort](./merge-sort/)

Merge Sort is another highly efficient sorting algorithm based on the divide-and-conquer strategy. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge function is key to the algorithm; it merges two sorted arrays to produce a single sorted array.

### [Quick Sort](./quick-sort/)

Quick Sort is a highly efficient sorting algorithm and is based on the divide-and-conquer approach. It picks an element as a pivot and partitions the given array around the picked pivot.

### [Selection Sort](./selection-sort/)

Selection sort is a simple sorting algorithm that emphasizes the process of remembering the lowest and highest values in each iteration.

### [Shell Sort](./shell-sort/)

Shell Sort is an in-place comparison sort. It is mainly a variation of insertion sort or bubble sort. The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared. By starting with far apart elements, it can move some out-of-place elements into position faster than a simple nearest neighbor exchange. Shell Sort is more efficient than a simple insertion or bubble sort and is particularly effective for medium-sized arrays.

----
## TODO:

### Additional Algorithms to Add:

There are many sorting algorithms beyond the examples here. Each has its own set of advantages, disadvantages, and use-cases where it is most suitable. Here's a brief overview of some additional sorting algorithms:

#### Radix Sort

Radix Sort is a non-comparative integer sorting algorithm that sorts data with integer keys by grouping keys by the individual digits which share the same significant position and value. It works on the principle of Counting Sort and sorts the data digit by digit starting from least significant digit to most significant digit.

#### TimSort

TimSort is a hybrid stable sorting algorithm, derived from merge sort and insertion sort, designed to perform well on many kinds of real-world data. It was implemented in 2002 by Tim Peters for the Python programming language. The algorithm finds subsequences of the data that are already ordered (run) and uses them to sort the remainder more efficiently.

#### Cocktail Shaker Sort

Cocktail Shaker Sort, also known as Bidirectional Bubble Sort, Cocktail Sort, Shaker Sort (which can also refer to a variant of Selection Sort), Ripple Sort, Shuttle Sort, or Happy Hour Sort, is an extension of Bubble Sort. The algorithm extends bubble sort by operating in two directions.

#### Gnome Sort

Gnome Sort, also called Stupid sort, is simple to understand and can be seen as a variant of insertion sort in which moving an element to its proper place is accomplished by a series of swaps, as in bubble sort.

----

Each sorting algorithm has its own niche where it performs the best, and the choice of sorting algorithm can depend on several factors such as the size of the dataset, whether the dataset is mostly sorted or completely random, and the specific constraints of the computing environment (like memory usage).