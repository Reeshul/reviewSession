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
    test("input of 'Amber, Amber, Amber' outputs 'Amber: 3'", () => {
      expect(report("Amber, Amber, Amber")).toEqual("Amber: 3");
    });
    test("input of 'Amber, Green, Amber' outputs 'Green: 1, Amber: 2'", () => {
      expect(report("Amber, Green, Amber")).toEqual("Green: 1, Amber: 2");
    });
  });
  describe("Greens and/or Ambers and/or Reds", () => {
    test("input of 'red' outputs 'Red: 1'", () => {
      expect(report("red")).toEqual("Red: 1");
    });
    test("input of 'Green, Red, Green, red' outputs 'Green: 2, Red: 2'", () => {
      expect(report("Green, Red, Green, red")).toEqual("Green: 2, Red: 2");
    });
    test("inputs of 'red, Amber, red, red' outputs 'Amber: 1, Red: 3',", () => {
      expect(report("red, Amber, red, red")).toEqual("Amber: 1, Red: 3");
    });
  });
});
