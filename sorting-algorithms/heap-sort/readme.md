# Heap Sort

For educational purposes: Heap Sort is a popular and efficient sorting algorithm in computer science. The entire sorting algorithm is based on the binary heap data structure. It works by visualizing the elements of the array as a special kind of complete binary tree called a heap.

Here's a quick overview of how Heap Sort works:

1. Build a Max Heap from the input data.
2. At this point, the largest item is stored at the root of the heap. Replace it with the last item of the heap followed by reducing the size of the heap by 1. Finally, heapify the root of the tree.
3. Repeat the above steps while the size of the heap is greater than 1.

The process of building a heap from an array ensures that the parent node is always greater than or equal to the child nodes. In a max heap, the maximum element is at the root. The process of heapifying a tree ensures that the tree remains a max heap after each extraction.

This implementation starts by building a max heap from the input array. It then repeatedly extracts the maximum element from the heap (which is the root of the heap), moves it to the end of the array, and then heapifies the remaining heap. By doing this, it sorts the array in ascending order.