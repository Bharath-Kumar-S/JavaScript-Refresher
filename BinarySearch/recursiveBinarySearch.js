const recursiveBinarySearch = (arr, target) => {
  const search = (arr, start = 0, end = arr.length - 1) => {
    // base case
    if (start > end) return -1;

    // find mid point
    let mid = Math.floor((start + end) / 2);

    // if mid is target
    if (arr[mid] === target) return mid;

    // if target is less than mid
    if (arr[mid] > target) return search(arr, start, mid - 1);

    return search(arr, mid + 1, end);
  };

  return search(arr);
};

console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
