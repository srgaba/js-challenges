const antipodesAverage = (arr) => {
  if(arr.length % 2 === 1){
    const middleIndex = Math.floor(arr.length / 2)
    arr.splice(middleIndex, 1)
  }
  const left = arr
  const right = left.splice(arr.length / 2).reverse()
  return left.map((v, i) => (right[i] + v) / 2)
}

console.log(antipodesAverage([1, 2, 3, 4]))
