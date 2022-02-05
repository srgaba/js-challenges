//https://edabit.com/challenge/Np7R8F24PaqBShZc5

const colorPatternTimes = (cols) => {
  const colored = cols.length * 2
  const switched = cols.reduce((total, value, i, values) => {
    const next = values[i+1]
    if(next) if(value !== next) total += 1
    return total
  }, 0)
  return colored + switched
}
