import Ledger from "./Ledger";

type Goal = {
  id: number;
  name?: string;
  transacted_at: Date;
  amount: number;
  status?: string;
  progress: number;
  imageUrl?: string;
  ledger?: Ledger;
  is_active?: boolean;
  onClick?: () => void;
  resume?: () => void;
};

export default Goal;
