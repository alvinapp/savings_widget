import {
  FiFlag,
  FiCalendar,
  FiLayers,
  FiTarget,
  FiPauseCircle,
} from "react-icons/fi";
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
    name: "Spend responsibly",
    amount: 21636.05,
    status: "",
    progress: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
  {
    id: 1,
    name: "Dream villa",
    amount: 21636.05,
    status: "🪴 Resume goal, N 44.4M",
    progress: 30,
    imageUrl:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
  {
    id: 2,
    name: "Travel to Bali",
    amount: 1143323,
    status: "🚀 Halfway there",
    progress: 60,
    imageUrl:
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
  {
    id: 3,
    name: "Kid’s college",
    amount: 10043323,
    status: "",
    progress: 100,
    imageUrl:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
];
export const upcomingSavings = [
  {
    id: 0,
    name: "Dream wedding",
    amount: 50000,
    goalImage:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    due_date: yesterday,
  },
  {
    id: 1,
    name: "Spend responsibly",
    amount: 17500,
    goalImage:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    due_date: date,
  },
  {
    id: 2,
    name: "Travel to Bali",
    amount: 1143323,
    goalImage:
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    due_date: date,
  },
  {
    id: 3,
    name: "Kid’s college",
    amount: 10043323,
    goalImage:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    due_date: date,
  },
];
export const predefinedGoals = [
  {
    id: 0,
    name: "Rainy day fund",
    amount: 500000,
    status: "",
    progress: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
  {
    id: 1,
    name: "Spend responsibly",
    amount: 100000,
    status: "🪴 Resume goal, N 44.4M",
    progress: 30,
    imageUrl:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
  {
    id: 2,
    name: "Car",
    amount: 500000,
    status: "🚀 Halfway there",
    progress: 60,
    imageUrl:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzkxNjc1NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    transacted_at: date,
  },
  {
    id: 3,
    name: "Home",
    amount: 3000000,
    status: "",
    progress: 100,
    imageUrl:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3Mzg5Njc4OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    transacted_at: date,
  },
  {
    id: 4,
    name: "Kids",
    amount: 1000000,
    status: "",
    progress: 100,
    imageUrl:
      "https://images.unsplash.com/photo-1592106680408-e7e63efbc7ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzkyMjM1NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    transacted_at: date,
  },
  {
    id: 5,
    name: "Land",
    amount: 1000000,
    status: "",
    progress: 100,
    imageUrl:
      "https://images.unsplash.com/photo-1588067444250-50f27842c0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzQ5MzcxMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    transacted_at: date,
  },
  {
    id: 6,
    name: "Holiday",
    amount: 50000,
    status: "",
    progress: 100,
    imageUrl:
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    transacted_at: date,
  },
  {
    id: 7,
    name: "Large purchase",
    amount: 10043323,
    status: "",
    progress: 100,
    imageUrl:
      "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDIwMTk0Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    transacted_at: date,
  },
];
export const activities = [
  // {
  //   id: 0,
  //   goalName: "Spend responsibly",
  //   amount: 21636.05,
  //   activityName: "Deposit",
  //   emoji: "🎯",
  //   type: "debit",
  //   transacted_at: date,
  // },
  // {
  //   id: 1,
  //   goalName: "Spend responsibly",
  //   amount: 922.53,
  //   activityName: "Carrefour",
  //   emoji: "🎯",
  //   type: "debit",
  //   transacted_at: date,
  // },
  // {
  //   id: 2,
  //   goalName: "Spend responsibly",
  //   amount: 1143,
  //   activityName: "Love Kitchen",
  //   emoji: "🎯",
  //   type: "credit",
  //   transacted_at: date,
  // },
];

export const triggers = [
  // {
  //   id: 0,
  //   percentage: 10,
  //   appliedTo: "all merchant",
  //   triggerName: "Round it up",
  //   image: "",
  //   created_at: date,
  // },
  // {
  //   id: 1,
  //   percentage: 1,
  //   appliedTo: "Love kitchen",
  //   triggerName: "Round it up",
  //   image: "",
  //   created_at: date,
  // },
];
export const goalSettingTabs = [
  {
    tab_id: 0,
    name: "All",
    icon: <FiLayers />,
  },
  {
    tab_id: 1,
    name: "Active",
    icon: (
      <div className="-scale-x-100">
        <FiFlag />
      </div>
    ),
  },
  {
    tab_id: 2,
    name: "Paused",
    icon: <FiPauseCircle />,
  },
  {
    tab_id: 3,
    name: "Achieved",
    icon: <FiTarget />,
  },
];
