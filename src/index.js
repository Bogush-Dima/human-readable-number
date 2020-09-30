module.exports = function toReadable (number) {
    const single = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
      ]
    
      const tenths = [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
      ]
    
      const hundredths = []
    
      const numArr = (number + '').split('')
      let result = ''
    
      for (let i in numArr) {
        numArr[i] = +numArr[i]
      }
    
      switch (numArr.length) {
        case 1:
          result = single[number]
          break
        case 2:
          switch (numArr[numArr.length - 2]) {
            case 1:
              result = tenths[numArr[numArr.length - 1]]
              break
            default:
              if (numArr[numArr.length - 1] === 0) {
                result = `${tenths[numArr[numArr.length - 2] + 8]}`
              } else {
                result = `${tenths[numArr[numArr.length - 2] + 8]} ${single[numArr[numArr.length - 1]]}`
              }
              break
          }
          break
        case 3:
          if (numArr[numArr.length - 2] === 0 && numArr[numArr.length - 1] === 0) {
            result = `${single[numArr[numArr.length - 3]]} hundred`
          } else if (numArr[numArr.length - 2] === 0) {
            result = `${single[numArr[numArr.length - 3]]} hundred ${single[numArr[numArr.length - 1]]}`
          } else if (numArr[numArr.length - 2] === 1) {
            result = `${single[numArr[numArr.length - 3]]} hundred ${tenths[numArr[numArr.length - 1]]}`
          } else if (numArr[numArr.length - 1] === 0) {
            result = `${single[numArr[numArr.length - 3]]} hundred ${tenths[numArr[numArr.length - 2] + 8]}`
          } else {
            result = `${single[numArr[numArr.length - 3]]} hundred ${tenths[numArr[numArr.length - 2] + 8]} ${single[numArr[numArr.length - 1]]}`
          }
          
      }
      return result
}
