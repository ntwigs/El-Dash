export const zero = [
  true, true, true,
  true, false, true,
  true, false, true,
  true, false, true,
  true, false, true,
  true, false, true,
  true, true, true,
]

export const one = [
  false, false, true,
  false, false, true,
  false, false, true,
  false, false, true,
  false, false, true,
  false, false, true,
  false, false, true,
]

export const two = [
  true, true, true,
  false, false, true,
  false, false, true,
  true, true, true,
  true, false, false,
  true, false, false,
  true, true, true,
]

export const three = [
  true, true, true,
  false, false, true,
  false, false, true,
  true, true, true,
  false, false, true,
  false, false, true,
  true, true, true,
]

export const four = [
  true, false, true,
  true, false, true,
  true, false, true,
  true, true, true,
  false, false, true,
  false, false, true,
  false, false, true,
]

export const five = [
  true, true, true,
  true, false, false,
  true, false, false,
  true, true, true,
  false, false, true,
  false, false, true,
  true, true, true,
]

export const six = [
  true, false, false,
  true, false, false,
  true, false, false,
  true, true, true,
  true, false, true,
  true, false, true,
  true, true, true,
]

export const seven = [
  true, true, true,
  false, false, true,
  false, false, true,
  false, false, true,
  false, false, true,
  false, false, true,
  false, false, true,
]

export const eight = [
  true, true, true,
  true, false, true,
  true, false, true,
  true, true, true,
  true, false, true,
  true, false, true,
  true, true, true,
]

export const nine = [
  true, true, true,
  true, false, true,
  true, false, true,
  true, true, true,
  false, false, true,
  false, false, true,
  false, false, true,
]

export const colon = [
  false, false, false,
  false, false, false,
  false, true, false,
  false, false, false,
  false, true, false,
  false, false, false,
  false, false, false,
]


export const getNumberAsText = ({ number }) => {
  switch (number) {
    case undefined: {
      return 'zero'
    }
    case '0': {
      return 'zero'
    }
    case '1': {
      return 'one'
    }
    case '2': {
      return 'two'
    }
    case '3': {
      return 'three'
    }
    case '4': {
      return 'four'
    }
    case '5': {
      return 'five'
    }
    case '6': {
      return 'six'
    }
    case '7': {
      return 'seven'
    }
    case '8': {
      return 'eight'
    }
    case '9': {
      return 'nine'
    }
    default: {
      throw new Error('That is not a number')
    }
  }
}
