const { floodFill } = require("./flood-fill")
const { output, testParams } = require("./constants")

describe("flood-fill algo test", () => {
  test("given pre-defined input, result equals output", () => {
    let res = floodFill(testParams)
    expect(res).toStrictEqual(output)
  })
})
