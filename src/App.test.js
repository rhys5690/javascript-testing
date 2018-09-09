import { total } from "./App";
import { add } from "./add";

// Mock external dependency used by total
jest.mock("./add", () => ({
  add: jest.fn(() => 25)
}));

test("total", () => {
  expect(total(5, 20)).toBe("$25");
  expect(add).toHaveBeenCalledTimes(1);
  add.mockImplementation(() => 30);
  expect(total(5, 20)).toBe("$30")
});
