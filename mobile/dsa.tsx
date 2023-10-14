// function bubbleSort(arr) {
//     let noSwaps
//     /* The `for` loop is iterating over the array `arr` in reverse order.
//      It starts from the last index (`arr.length - 1`) and continues 
//      until the index is greater than 0 (`i > 0`). The loop 
//      decrements the index by 1 in each iteration (`i--`). */
//     for (let i = arr.length - 1; i > 0; i--) {
//       noSwaps = true
//       /* The line `for (let j = 0; j < i; j++) 
//       {` is a nested `for` loop that iterates over the array
//       `arr` from index 0 to `i-1`. */
//       for (let j = 0; j < i; j++) {
//         if (arr[j] > arr[j + 1]) {
//           // SWAP
//           ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//           noSwaps = false
//         }
//       }
//       if (noSwaps) break
//     }
//     return arr
//   }