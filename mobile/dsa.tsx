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


// A function called mergeArray that takes 2 argument 
// and return a array of numbers
// function mergeArray(arr1: number[], arr2: number[]): number[] {
    // An empty array called result to store merged number
    // let result: number[] = [];
//    2 variables called i & j to track position in each array list
    // let i: number = 0;
    // let j: number = 0;

// A loop the runs as long as we have number to compare in arr1, arr2
    // while (i < arr1.length && j < arr2.length) {
// We compare the current numbers in arr1 and arr2. 
// If the number in arr1 is smaller, we add it to our result list.
        // if (arr1[i] < arr2[j]) {
        //     result.push(arr1[i]);
        //     i++;
        // } else {
            // If the number in arr2 is smaller or equal, 
            // we add it to our result list.
    //         result.push(arr2[j]);
    //         j++;
    //     }
    // }

// After the loop, we check for remaining numbers in arr1
// and if so, we add them to the result list.
    // while (i < arr1.length) {
    //     result.push(arr1[i]);
    //     i++;
    // }

// Similarly, we also check for remaining numbers in arr2
// and if so, we add them to the result list.
    // while (j < arr2.length) {
    //     result.push(arr2[j]);
    //     j++;
    // }

// Finally, we return the merged list that contains all the numbers in sorted order.
//     return result;
// }

// The mergeArray function with two example lists [7, 4, 5, 3] and [0, 1, 9, 6].
// const mergedArray = mergeArray([7, 4, 5, 3], [0, 1, 9, 6]);

// We print the result, which is the merged and sorted list.
// console.log(mergedArray);


// const swapInJS =(arr: number[], indx1:number, indx2:number): void =>{
//     arr[indx1]arry[indx2] = arr[indx2]arr[indx1]
// }



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