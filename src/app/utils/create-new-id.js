const assignNewId = (dataObj) => {
  const randomNum = ~~(Math.random() * 1000000)
  if (dataObj.hasOwnProperty(randomNum)) {
    assignNewId()
  }
  return randomNum
}

export default assignNewId