//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function findMinValue(arr){
  let min = arr[0];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Sort each array in ascending order.
let sortLowToHigh = function(arr){
    let newArr = [];
    let limiter = arr.length;
        for (let i = 0; newArr.length < limiter ; i++){
            let minInArr = findMinValue(arr);
            let index = arr.indexOf(minInArr);
            arr.splice(index, 1);
            newArr.push(minInArr);
        }
    return newArr;
}
// console.log(sortLowToHigh(nums1));

// console.log(sortLowToHigh(nums2));
// console.log(sortLowToHigh(nums3));

//Sort each array in descending order.
let sortHighToLow = function(arr){
    return sortLowToHigh(arr).reverse();
}
    

console.log(sortHighToLow(nums1));
console.log(sortHighToLow(nums2));
console.log(sortHighToLow(nums3));
