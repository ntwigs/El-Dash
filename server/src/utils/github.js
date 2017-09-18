export const getDate = () => {
  const date = new Date()
  const day = `0${ date.getDate() }`.slice(-2)
  const month = `0${ date.getMonth() + 1 }`.slice(-2)
  const year = date.getFullYear()
  console.log(day, month)
  const fullDate = `${ year }-${ month }-${ day }`
  return `from=${ fullDate }&to=${ fullDate }`
}
