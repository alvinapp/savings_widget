import { cleanup, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import AccountCard from "client/pages/components/AccountCard";
import Institution from "client/models/Institution";
import Account from "client/models/Account";

afterEach(cleanup);

describe("", () => {
  test("Check if AccountCard props are being passed", () => {
    const institution: Institution = {
      id: 0,
      name: "Equity",
    };
    const props: Account = {
      name: institution.name,
      balance: 231800,
      type: "Wallet",
      account_number: "4637990278234566",
      account_id: "6321d375bed8a715dad01fb9",
      is_linked: true,
    };
    render(<AccountCard account={props} />);
    const text = screen.getByText("Equity");
    expect(text).toBeInTheDocument();
  });
});
