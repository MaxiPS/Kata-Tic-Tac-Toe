import { game } from "../src/tic-tac-toe";


describe("tic-tac-toe should", () => {
  test("be the winner the player X", () => {
    const moves = ["X", "X", "X", "", "O", "O", "", "", ""];
    expect(game(moves)).toBe("Player X is the winner!");
  });

  test("be the winner the player O", () => {
    const moves = ["O", "O", "O", "", "X", "X", "", "", ""];
    expect(game(moves)).toBe("Player O is the winner!");
  });
});
