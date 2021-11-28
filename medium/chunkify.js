const chunkify = (arr, n) => {
  const matrix = []
  let numbersOfArrays = arr.length / n
  console.log(numbersOfArrays)
  for(let i = 0; i < numbersOfArrays; i++){
    let initial = i === 0 ? 0 : i * n
    let final = initial + n 
    console.log('i', i, 'initial', initial, 'final', final)
    matrix.push(arr.slice(initial, final))
  }
  return matrix
}
