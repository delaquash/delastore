// Parameter arr is the array of number we are performing the search on i.e 17-24
// while elm means the element of particular number we are searching for i.e 21

// function binarySearch(arr: number[], elm: number): number {
    // startValue is the indexes of the first number in the arraylist while
    // let startValue : number = 0;
    // endvalue is the indexes of the end value in the array, 
    // -1 is to prevent out of bounds when working with array
    // let endValue : number = arr.length -1
    // midValue is the addition af the indexes in the array and the Math.floor is to prevent 
    // outputing floating values e.g 2.1, 5.6, 4.3. Ensure parenthesis are correctly added too.
//     let midValue: number = Math.floor((startValue+endValue) /2)
//     // While loop will continue until it finds the element or it has searched all elements
//     while (elm !== arr[midValue]) {
//         if(elm < arr[midValue]){
//             endValue = midValue - 1
//         } else {
//             startValue = midValue + 1
//         }
//         midValue = Math.floor((startValue+endValue) /2)

//     }

// }
// binarySearch([17, 18, 19, 20, 21, 22, 23, 24], 21)
// 17 is startValue with index 0 
// 24 is endValue with index 7  
// midvalue is index 3 or value 20 since (0+7)/2 = 3.5, and using Math.floor(3.5) is index 3



//   if(elm < arr[midValue]{
//     // Since the midVlaue of the array !== midValue, we then have to check if it lesser than.
//     // If so, set new end index as current middle index minus one
//     endValue = midValue -1;
// } else {
//     // Else if the element is greater that the midValue, we need to find a lower value
//     // Set new startindex as current middle index plus one
//     startValue= midValue +1 ;
// })


// const bubbleSort =(arr: number[]): []=> {
//     for (let i = arr.length; i > 0; i--) {
//         for(let j = 0; j < i -1; i++){
//             if(arr[j] > arr[i]){
//                 // swap elements in the array
//                 var temp = arr[i]
//                 arr[j] = arr[i]
//             }
            
            

//         }
//         return arr
//     }}