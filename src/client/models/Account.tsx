import Institution from 'client/models/Institution';

type Account = {
  account_number: string;
  account_id: string;
  type: string;
  balance: number;
  name: string;
  is_linked: boolean;
};

export default Account;
