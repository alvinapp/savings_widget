import { cleanup, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import GoalCard from "client/pages/components/GoalCard";
afterEach(cleanup);

describe("", () => {
  test("Check if TransactionCard props are being passed", () => {
    const now = new Date();
    const props = {
      id: 0,
      goalName: "Spend responsibly",
      amount: 21636.05,
      status: "",
      progress: 40,
      goalImage: "",
      transacted_at: now,
    };
    render(<GoalCard {...props} />);
    const merchant = screen.getByText("Memphis Tech");
    expect(merchant).toBeInTheDocument();
  });
});
