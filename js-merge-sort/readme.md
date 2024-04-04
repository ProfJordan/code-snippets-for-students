# Merge Sort

Merge Sort is another highly efficient sorting algorithm based on the divide-and-conquer strategy. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge function is key to the algorithm; it merges two sorted arrays to produce a single sorted array.

This function, mergeSort, recursively splits the array until arrays of single elements remain. Then, as the recursion unwinds, it merges these arrays using the merge function, which combines two sorted arrays into a single sorted array. This process continues until the entire array is merged back together in sorted order.