type Goal = {
  id?: number;
  goalName?: string;
  transacted_at: Date;
  amount: number;
  status?:string;
  progress: number;
  goalImage?:string;
};

export default Goal;
