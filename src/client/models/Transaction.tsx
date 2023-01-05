import Category from 'client/models/Category';
import Merchant from 'client/models/Merchant';

import Institution from './Institution';

type Transaction = {
  id: number;
  merchant: Merchant;
  transacted_at: Date;
  category: Category;
  amount: number;
  institution: Institution;
  viewInstitutionLogo?: boolean;
  type: string;
};

export default Transaction;
