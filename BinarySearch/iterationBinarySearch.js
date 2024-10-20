const iterativeBinarySearch = (arr = [], target) => {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return (start = mid + 1);
    else end = mid - 1;
  }
  return -1;
};

console.log(iterativeBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
