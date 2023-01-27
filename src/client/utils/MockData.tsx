import { FiFlag, FiCalendar } from "react-icons/fi";
const date = new Date();
const yesterday = new Date(date.getTime());
yesterday.setDate(date.getDate() - 1);
export const tabs = [
  {
    tab_id: 0,
    name: "My goals",
    icon: <FiFlag />,
  },
  {
    tab_id: 1,
    name: "Upcoming savings",
    icon: <FiCalendar />,
  },
];
export const goals = [
  {
    id: 0,
    goalName: "Spend responsibly",
    amount: 21636.05,
    status: "",
    progress: 10,
    goalImage:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
  {
    id: 1,
    goalName: "Dream villa",
    amount: 21636.05,
    status: "🪴 Resume goal, N 44.4M",
    progress: 30,
    goalImage:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
  {
    id: 2,
    goalName: "Travel to Bali",
    amount: 1143323,
    status: "🚀 Halfway there",
    progress: 60,
    goalImage:
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
  {
    id: 3,
    goalName: "Kid’s college",
    amount: 10043323,
    status: "",
    progress: 100,
    goalImage:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
];
export const upcomingSavings = [
  {
    id: 0,
    goalName: "Dream wedding",
    amount: 50000,
    goalImage:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    due_date: yesterday,
  },
  {
    id: 1,
    goalName: "Spend responsibly",
    amount: 17500,
    goalImage:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    due_date: date,
  },
  {
    id: 2,
    goalName: "Travel to Bali",
    amount: 1143323,
    goalImage:
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    due_date: date,
  },
  {
    id: 3,
    goalName: "Kid’s college",
    amount: 10043323,
    goalImage:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    due_date: date,
  },
];
export const predefinedGoals = [
  {
    id: 0,
    goalName: "Rainy day fund",
    amount: 21636.05,
    status: "",
    progress: 10,
    goalImage:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
  {
    id: 1,
    goalName: "Spend responsibly",
    amount: 21636.05,
    status: "🪴 Resume goal, N 44.4M",
    progress: 30,
    goalImage:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
  {
    id: 2,
    goalName: "Car",
    amount: 1143323,
    status: "🚀 Halfway there",
    progress: 60,
    goalImage:
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
  {
    id: 3,
    goalName: "Home",
    amount: 10043323,
    status: "",
    progress: 100,
    goalImage:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
  {
    id: 4,
    goalName: "Kids",
    amount: 10043323,
    status: "",
    progress: 100,
    goalImage:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
  {
    id: 5,
    goalName: "Land",
    amount: 10043323,
    status: "",
    progress: 100,
    goalImage:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
  {
    id: 6,
    goalName: "Holiday",
    amount: 10043323,
    status: "",
    progress: 100,
    goalImage:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
  {
    id: 7,
    goalName: "Large purchase",
    amount: 10043323,
    status: "",
    progress: 100,
    goalImage:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
];
export const activities = [
  {
    id: 0,
    goalName: "Spend responsibly",
    amount: 21636.05,
    activityName: "Deposit",
    emoji: "🎯",
    type: "debit",
    transacted_at: date,
  },
  {
    id: 1,
    goalName: "Spend responsibly",
    amount: 922.53,
    activityName: "Carrefour",
    emoji: "🎯",
    type: "debit",
    transacted_at: date,
  },
  {
    id: 2,
    goalName: "Spend responsibly",
    amount: 1143,
    activityName: "Love Kitchen",
    emoji: "🎯",
    type: "credit",
    transacted_at: date,
  },
];

export const triggers = [
  {
    id: 0,
    percentage: 10,
    appliedTo: "all merchant",
    triggerName: "Round it up",
    image: "",
    created_at: date,
  },
  {
    id: 1,
    percentage: 1,
    appliedTo: "Love kitchen",
    triggerName: "Round it up",
    image: "",
    created_at: date,
  },
];