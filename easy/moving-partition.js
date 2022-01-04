function movingPartition(arr) {
  if (!arr.length) return [];
  const baseArr = [[[arr[0]], arr.slice(1)]];
  for (let i = 1; i <= arr.length - 2; i++) {
    const lastLength = baseArr.length - 1;
    const lastSubArr = [
      [...baseArr[lastLength][0]],
      [...baseArr[lastLength][1]],
    ];
    lastSubArr[0].push(lastSubArr[1].shift());
    baseArr.push(lastSubArr);
  }
  return baseArr;
}

console.log(movingPartition([1, 2, 3, 4, 5]));
