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



// function insertSort(arr:[]){
//     for (var i = 1, i < arr.length; i++){
//         var currentVal = arr[i];
//         /* The line `for(var j= i-1;  j >= 0 && arr[j] > currentVal; j--)` is a nested `for` loop that
//         iterates over the array `arr` from index `i-1` to 0. */
//         for(var j= i-1;  j >= 0 && arr[j] > currentVal; j--){
//                 /* `arr[j+1] = arr[j]` is shifting the element at index `j` to the right by one
//                 position. This is done to make space for the `currentVal` to be inserted at the
//                 correct position in the sorted portion of the array. */
//                 arr[j+1] = arr[j]
//          }
//             arr[j] = currentVal
//     }
//     return arr;
// }

// insertSort([2, 1, 9, 4, 46, 55])