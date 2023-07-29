import { isZero } from "./isZero";

test("0を渡したらtrueを返すこと", () => {
    const result = isZero(0);
    expect(result).toBe(true);
});

test("1を渡したらfalseを返すこと", () => {
    const result = isZero(1);
    expect(result).toBe(false);
});
