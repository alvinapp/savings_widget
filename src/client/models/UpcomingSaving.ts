type UpcomingSaving = {
  id?: number;
  goalName?: string;
  due_date: Date;
  amount: number;
  goalImage?: string;
  onClick?: () => void;
};

export default UpcomingSaving;
