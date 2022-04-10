//https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1/?page=1&company[]=Amazon&sortBy=submissions#

function subarraySum(arr, s) {
  let sum;

  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    if (sum === s) return [i + 1, i + 1];
    for (let x = i + 1; x < arr.length; x++) {
      sum += arr[x];
      if (sum === s) return [i + 1, x + 1];
      else if (sum > s) break;
    }
  }

  return [-1];
}

console.log(subarraySum([1, 2, 3, 4, 5], 5));
