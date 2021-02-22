const report = require("./report");

describe("#report", () => {
  test("Greens", () => {
    expect(report("Green")).toEqual("Green: 1");
  });
});
