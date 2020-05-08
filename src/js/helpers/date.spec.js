import { formatDate } from "./date";


describe("formatDate", () => {
  it("check format", () => {
    expect(formatDate(1588969232701, "yyyy")).toBe("2020")
    ;
  });
});
