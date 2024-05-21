# Sorting Algorithms
Examples of sorting Algorithms in JS.

----

## Sorting Algorithms:

### [Bubble sort](./bubble-sort/)

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. Despite its simplicity, Bubble Sort is not very efficient for large datasets compared to more advanced sorting algorithms like Quick Sort or Merge Sort.

### [Bucket Sort](./bucket-sort/)

Bucket Sort, or Bin Sort, operates by partitioning an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sort algorithm. It is mainly useful when the input is uniformly distributed over a range.

### [Cocktail Shaker Sort](./cocktail-shaker-sort/)

Cocktail Shaker Sort, also known as Bidirectional Bubble Sort, Cocktail Sort, Shaker Sort (which can also refer to a variant of Selection Sort), Ripple Sort, Shuttle Sort, or Happy Hour Sort, is an extension of Bubble Sort. The algorithm extends bubble sort by operating in two directions.

### [Comb Sort](./comb-sort/)

Comb Sort is a relatively simple sorting algorithm originally designed to improve upon bubble sort by eliminating turtles, or small values near the end of the list, since in a bubble sort these slow the sorting down tremendously. Rabbits, large values around the beginning of the list, do not pose a problem in bubble sort. In comb sort, the gap between elements is reduced by a factor (the shrink factor) on each pass until the gap is 1.

### [Counting Sort](./counting-sort/)

Counting Sort is an integer sorting algorithm that operates by counting the number of objects that have each distinct key value. It's efficient if the range of input data is not significantly greater than the number of objects to be sorted.

### [Gnome Sort](./gnome-sort/)

Gnome Sort, also called Stupid sort, is simple to understand and can be seen as a variant of insertion sort in which moving an element to its proper place is accomplished by a series of swaps, as in bubble sort.

### [Heap sort](./heap-sort/)

Heap Sort is a popular and efficient sorting algorithm in computer science. The entire sorting algorithm is based on the binary heap data structure. It works by visualizing the elements of the array as a special kind of complete binary tree called a heap.

### [Insertion Sort](./insertion-sort/)

Insertion Sort is a simple and intuitive sorting algorithm. It builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heap sort, or merge sort.

### [Merge Sort](./merge-sort/)

Merge Sort is another highly efficient sorting algorithm based on the divide-and-conquer strategy. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge function is key to the algorithm; it merges two sorted arrays to produce a single sorted array.

### [Quick Sort](./quick-sort/)

Quick Sort is a highly efficient sorting algorithm and is based on the divide-and-conquer approach. It picks an element as a pivot and partitions the given array around the picked pivot.

### [Radix Sort](./radix-sort/)

Radix Sort is a non-comparative integer sorting algorithm that sorts data with integer keys by grouping keys by the individual digits which share the same significant position and value. It works on the principle of Counting Sort and sorts the data digit by digit starting from least significant digit to most significant digit.

### [Selection Sort](./selection-sort/)

Selection sort is a simple sorting algorithm that emphasizes the process of remembering the lowest and highest values in each iteration.

### [Shell Sort](./shell-sort/)

Shell Sort is an in-place comparison sort. It is mainly a variation of insertion sort or bubble sort. The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared. By starting with far apart elements, it can move some out-of-place elements into position faster than a simple nearest neighbor exchange. Shell Sort is more efficient than a simple insertion or bubble sort and is particularly effective for medium-sized arrays.


### [Tim Sort](./tim-sort/)

Tim Sort is a hybrid stable sorting algorithm, derived from merge sort and insertion sort, designed to perform well on many kinds of real-world data. It was implemented in 2002 by Tim Peters for the Python programming language. The algorithm finds subsequences of the data that are already ordered (run) and uses them to sort the remainder more efficiently.

----

## Explaination & Run Times:

1. Bubble Sort
Explanation: This is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process repeats until the list is sorted.
Run Times: The best-case scenario (O(n)) occurs when the list is already sorted, and it only needs one pass to confirm this. The average and worst-case (O(n^2)) scenarios occur when the list is randomly arranged or in reverse order, requiring multiple passes through the list, making comparisons at each step.
2. Bucket Sort
Explanation: Bucket sort distributes elements of an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm or by recursively applying the bucket sort.
Run Times: The best and average cases (O(n+k)) occur when the elements are distributed evenly among the buckets. The worst-case (O(n^2)) occurs when all elements are placed into a single bucket.
3. Cocktail Shaker Sort
Explanation: A variation of bubble sort that sorts in both directions on each pass through the list. This can help to reduce the number of passes needed to fully sort the list.
Run Times: The best-case scenario is similar to bubble sort where a single pass can sort the list (O(n)). Average and worst cases (O(n^2)) occur when elements are in random order or nearly in reverse order.
4. Comb Sort
Explanation: Improves on bubble sort by eliminating turtles, or small values near the end of the list. It uses a gap that is initially large and shrinks until it reaches 1.
Run Times: Best-case is O(n log n) when there is minimal shrinking of the gap. Average and worst-case performance heavily depends on the gap size and the order of input.
5. Counting Sort
Explanation: This is an integer sorting algorithm that operates by counting the number of objects that have each distinct key value, and using arithmetic to determine the positions of each key.
Run Times: In all cases (O(n+k)), where n is the number of elements and k is the range of the input, the algorithm runs in linear time relative to the input.
6. Gnome Sort
Explanation: Similar to insertion sort but easier to implement. The algorithm continually moves an element to its proper place by comparing it with its neighbors.
Run Times: Best-case is O(n) when the array is already sorted. Average and worst-case are O(n^2) when elements are in reverse order.
7. Heap Sort
Explanation: This algorithm divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element and moving it to the sorted region.
Run Times: Consistently O(n log n) because it requires log n operations to add or remove elements from the heap, applied to n elements.
8. Insertion Sort
Explanation: Builds the final sorted array one item at a time, with the movement of elements that are greater than the value being inserted.
Run Times: Best-case is O(n) for a nearly sorted list, while average and worst cases are O(n^2) due to the need for potentially moving each element several places.
9. Merge Sort
Explanation: A divide and conquer algorithm that splits the list into halves, sorts each half, and merges them back together.
Run Times: Consistently O(n log n) because each level of split involves a linear amount of work across all segments, and the depth of the splitting is logarithmic relative to n.
10. Quick Sort
Explanation: Another divide and conquer algorithm that selects a 'pivot' element and partitions the elements around this pivot, sorting the partitions independently.
Run Times: Best and average cases are O(n log n) due to efficient partitioning, but the worst case is O(n^2) when the smallest or largest element is always picked as the pivot.
11. Radix Sort
Explanation: Non-comparative integer sorting algorithm that sorts data with integer keys by grouping the keys by individual digits that share the same significant position and value.
Run Times: O(nk), where n is the number of elements and k is the digit length of the number.
12. Selection Sort
Explanation: Inefficiently sorts an array by repeatedly finding the minimum element from the unsorted part and putting it at the beginning.
Run Times: Always O(n^2) because each element needs a comparison with all other elements.
13. Shell Sort
Explanation: An in-place comparison sort which starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared.
Run Times: Performance depends heavily on the gap sequence, with the best known being O(n(log n)^2).
14. Tim Sort
Explanation: A hybrid sorting algorithm, derived from merge sort and insertion sort, designed to perform well on many kinds of real-world data.
Run Times: The algorithm runs in O(n log n) in average and worst cases, with a best case of O(n) when the data is already sorted.
In providing feedback on this explanation, ensure each algorithm’s logic is clearly linked to its runtime performance, and try using more examples to illustrate complex concepts, especially for the more complex sorting algorithms like Quick Sort and Tim Sort.

----
## TODO:

### Add Additional Algorithms:

There are many sorting algorithms beyond the examples here. Each has its own set of advantages, disadvantages, and use-cases where it is most suitable.

----

Each sorting algorithm has its own niche where it performs the best, and the choice of sorting algorithm can depend on several factors such as the size of the dataset, whether the dataset is mostly sorted or completely random, and the specific constraints of the computing environment (like memory usage).
