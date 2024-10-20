function findMax(arr) {
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
  // After the loop, start and end will point to the maximum element
  return arr[low];
}

// Test samples
console.log(findMax([2, 1, 5, 4, 3])); // Expected output: 5
console.log(findMax([15, 27, 33, 2, 8, 10])); // Expected output: 33
