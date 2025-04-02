import Sum from "../Sum"; // Correct import for default export

test("Calculate sum", () => {
    const result = Sum(3, 4);
    expect(result).toBe(7);
});