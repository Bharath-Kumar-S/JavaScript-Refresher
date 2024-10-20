// [1, 2, 3, 4, 5, 3, 1]

// Find the peak

// let start = 0, end = arr.length - 1;

// // Here, we start our search for the peak, akin to scanning the crowd for higher ground.
// while (start < end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] > arr[mid + 1]) {
//         // Our peak is to the left.
//         end = mid;
//     } else {
//         // The peak is to the right.
//         start = mid + 1;
//     }
// }
// let peak = start; // The peak is found—a place where you can see far and wide!

// // Binary search on the ascending sub-array

// start = 0, end = peak;
// while (start <= end) {
//   let mid = Math.floor((start + end) / 2);
//   if (arr[mid] === target) return mid;
//   else if (arr[mid] < target) start = mid + 1;
//   else end = mid - 1;
// }

// // Binary search on the descending sub-array
// start = peak, end = arr.length - 1;
// while (start <= end) {
//   let mid = Math.floor((start + end) / 2);
//   if (arr[mid] === target) return mid;
//   else if (arr[mid] > target) start = mid + 1;
//   else end = mid - 1;
// }
// return -1; // If the target is not found in either sub-array

const findPosition = (arr, x) => {
  // Find the peak using the implemented findPeak function
  let peak = findPeak(arr);

  // Search to the left of the peak (ascending part)
  let left = binarySearch(arr, x, 0, peak, true);

  // Search to the right of the peak (descending part)
  let right = binarySearch(arr, x, peak + 1, arr.length - 1, false);

  // Return the position if found, otherwise return -1
  if (left !== -1) {
    return left;
  } else if (right !== -1) {
    return right;
  } else {
    return -1;
  }
};

const findPeak = (arr) => {
  let low = 0,
    high = arr.length - 1;

  // Implement peak finding logic (binary search style)
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > arr[mid + 1]) {
      // Peak is to the left
      high = mid;
    } else {
      // Peak is to the right
      low = mid + 1;
    }
  }
  return low; // 'low' will point to the peak element
};

const binarySearch = (arr, x, low, high, ascending) => {
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === x) {
      return mid;
    }

    if (ascending) {
      // Ascending binary search logic
      if (arr[mid] < x) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      // Descending binary search logic
      if (arr[mid] > x) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1; // Element not found
};

// Test case
const arr = [-3, -2, 4, 6, 10, 8, 7, 1];
const x = 7;
const position = findPosition(arr, x);

if (position === -1) {
  console.log("Element not present");
} else {
  console.log("Element present at index " + position);
}
