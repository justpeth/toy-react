export const isNullOrObject = (val) => {
  return val === null || typeof val !== 'object'
}

export const merge = (oldVal, newVal) => {
  for (let p in newVal) {
    if (isNullOrObject(oldVal[p])) {
      oldVal[p] = newVal[p]
    } else {
      merge(oldVal[p], newVal[p])
    }
  }
}