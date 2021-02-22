const report = require("./report");

describe("#report", () => {
  describe("Greens", () => {
    test("input of 'Green' outputs 'Green: 1'", () => {
      expect(report("Green")).toEqual("Green: 1");
    });
    test("input of 'Green, Green' outputs 'Green: 2'", () => {
      expect(report("Green, Green")).toEqual("Green: 2");
    });
    test("input of 'Green, Green, Green' outputs 'Green: 3'", () => {
      expect(report("Green, green, Green")).toEqual("Green: 3");
    });
  });
  describe("Greens and/or Ambers", () => {
    test("input of 'Amber' outputs 'Amber: 1'", () => {
      expect(report("Amber")).toEqual("Amber: 1");
    });
  });
});
