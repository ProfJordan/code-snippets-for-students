# Shell Sort

----

## About:

For educational purposes: Shell Sort is an in-place comparison sort. It is mainly a variation of insertion sort or bubble sort. The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared. By starting with far apart elements, it can move some out-of-place elements into position faster than a simple nearest neighbor exchange. Shell Sort is more efficient than a simple insertion or bubble sort and is particularly effective for medium-sized arrays.

The algorithm uses a sequence known as the gap sequence, which defines how far apart the elements to be compared should be. The choice of gap sequence can affect the performance of the algorithm significantly. A common choice is to start with a large gap, then reduce the gap by a factor of 2 each time (this is the approach used in this example).

This function, shellSort, iteratively sorts elements that are a certain gap apart, with each iteration reducing the gap until it's 1. At a gap of 1, the algorithm essentially performs a regular insertion sort, but by this time, the array is already partially sorted, which makes the final insertion sort much more efficient. Shell Sort's performance depends heavily on the gap sequence it uses; the sequence used in this example is a simple one that divides the gap by 2 in each iteration.

----

## Run Times:

- **Best-case:** \(O(n \log n)\) (depends on gap sequence)
- **Average-case:** \(O(n (\log n)^2)\) (depends on gap sequence)
- **Worst-case:** \(O(n (\log n)^2)\) (worst known gap sequence)
