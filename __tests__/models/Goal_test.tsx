import { cleanup } from "@testing-library/react";

import Category from "client/models/Category";
import Goal from "client/models/Goal";

afterEach(cleanup);

it("Goals ", () => {
  const category: Category = {
    id: 1,
    name: "Groceries",
    emoji: "",
  };
  const goals: Goal = {
    id: 2,
    goalName: "savings",
    transacted_at: new Date(2022, 9, 2, 2, 15, 45),
    amount: 12345,
    progress: 10,
  };
  expect(goals.goalName).toBe("savings");
  expect(goals.transacted_at.toLocaleString("en-GB")).toBe(
    "02/10/2022, 02:15:45"
  );
});
