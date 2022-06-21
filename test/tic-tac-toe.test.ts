import { game } from "../src/tic-tac-toe";


describe("tic-tac-toe should", () => {
  test("be the winner the player X", () => {
    const table = ["X", "X", "X", "", "O", "O", "", "", ""];
    expect(game(table)).toBe("Player X is the winner!");
  });

  test("be the winner the player O", () => {
    const table = ["O", "O", "O", "", "X", "X", "", "", ""];
    expect(game(table)).toBe("Player O is the winner!");
  });
});
