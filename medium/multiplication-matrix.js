// https://edabit.com/challenge/EpwHHdFF6EABASmhL
function multiplicationTable(n) {
  const matrix = []
  for(let i = 1; i <= n; i++) {
    const arr = []
    let finalValue = n * i
    let value = i
    while(value <= finalValue) {
      arr.push(value)
      value += i
    }
    matrix.push(arr)
  }
  return matrix
}
