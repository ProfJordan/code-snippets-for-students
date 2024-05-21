function selectionSort(arr) {
    let n = arr.length;
          
    for(let i = 0; i < n; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for(let j = i+1; j < n; j++){
        if(arr[j] < arr[min]) {
          min=j; 
        }
       }
       if (min != i) {
           // Swapping the elements
           let tmp = arr[i]; 
           arr[i] = arr[min];
           arr[min] = tmp;      
      }
    }
    return arr;
  }
  
  // Example usage
  const array = [64, 34, 25, 12, 22, 11, 90];
  console.log("Sorted array:", selectionSort(array));
  