const report = require("./report");

describe("#report", () => {
  describe("Greens", () => {
    test("input of 'Green' outputs 'Green: 1", () => {
      expect(report("Green")).toEqual("Green: 1");
    });
    test("input of 'Green, Green' outputs 'Green: 2", () => {
      expect(report("Green, Green")).toEqual("Green: 2");
    });
  });
});
