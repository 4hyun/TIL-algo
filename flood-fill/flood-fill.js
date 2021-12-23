// Flood Fill algorithm in JS
// const { input, output } = require("./constants")

function floodFill({image, sr, sc, nv}) {
  // cache selected value
  let current = image[sr][sc]
  // selected equals new value
  if (current === nv) return image
  // start fillling (all 4 directions)
  fill(image, sr, sc, nv, current)
  return image
}

function fill(image, sr, sc, nv, current) {
  // sr | sc is out of range
  if (sr < 0 || sc < 0 || sr > image.length - 1 || sc > image[sr].length - 1) return
  // thisCurrent fill is skipped if not equal to current
  let thisCurrent = image[sr][sc]
  if (thisCurrent !== current) return

  // fill
  image[sr][sc] = nv

  const _fill = (sr, sc, nv, current) => fill(image, sr, sc, nv, current)
  _fill(sr - 1, sc, nv, current)
  _fill(sr + 1, sc, nv, current)
  _fill(sr, sc - 1, nv, current)
  _fill(sr, sc + 1, nv, current)
}

// test params
// const sr = 3,
//   sc = 3,
//   nv = 3

// console.log(floodFill(input, sr, sc, nv))

module.exports = { floodFill }
