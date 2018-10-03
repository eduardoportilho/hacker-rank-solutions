
function sortedIndexOf(arr, val, start, end) {
  start = start || 0
  end = end || arr.length - 1
  if (start === end) {
    return arr[start] === val ? start : -1
  }
  else if (start > end)
    return -1
  const mid = start + Math.floor((end - start)/2)
  if (arr[mid] === val)
    return mid
  else if(arr[mid] < val)
    return sortedIndexOf(arr, val, start, mid-1)
  else
    return sortedIndexOf(arr, val, mid+1, end)
}


console.log(`>>>`, sortedIndexOf([0,1,2,3], 0))