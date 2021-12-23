const input = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 2, 2, 2, 0, 0, 0],
  [0, 0, 0, 2, 2, 0, 0, 0],
  [0, 0, 0, 2, 2, 2, 2, 0],
  [0, 0, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 2, 0],
]

const output = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 3, 3, 3, 3, 0, 0, 0],
  [0, 0, 0, 3, 3, 0, 0, 0],
  [0, 0, 0, 3, 3, 3, 3, 0],
  [0, 0, 0, 0, 0, 3, 0, 0],
  [0, 0, 0, 0, 0, 3, 3, 0],
]

const testParams = { image: input, sr: 3, sc: 3, nv: 3 }

module.exports = { testParams, input, output }
