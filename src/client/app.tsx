import { useEffect, useState } from "react";
import "client/index.css";
import "client/style.scss";
import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "react-query";

// import Routes from "client/pages/routes";
import TermsCondition from "client/pages/terms-condition/TermsCondition";
import { Route, Routes } from "react-router-dom";
import GoalCreationIntro from "client/pages/goal-creation/GoalCreationIntro";
import { AddMonthlyIncome } from "./pages/goal-creation/AddMonthlyIncome";
import { CreateSavingsGoal } from "./pages/goal-creation/CreateSavingsGoal";
import AddGoalDetails from "./pages/goal-creation/AddGoalDetails";
import { GoalView } from "./pages/goal-view/GoalView";
import { SavingsTrigger } from "./pages/savings-triggers/SavingsTrigger";
import { Settings } from "./pages/settings/Settings";
import { GoalSettings } from "./pages/settings/GoalSettings";
import { SavingsTriggersSettings } from "./pages/settings/SavingsTriggersSettings";
import { NotificationSettings } from "./pages/settings/NotificationSettings";
import { Notifications } from "./pages/notications/Notifications";
import Overview from "./pages/overview/Overview";
import { DeleteGoalSuccess } from "./pages/goal-view/DeleteGoalSuccess";
import { CustomImageSelection } from "./pages/goal-creation/CustomImageSelection";
import { SettingsMonthlyIncome } from "./pages/settings/SettingsMonthlyIncome";
import useUserStore from "./store/userStore";
import io from "socket.io-client";
import useNotificationStore from "./store/notificationStore";
import UpdateGoalDetails from "./pages/update-goal/UpdateGoal";
declare var AppConfig: AppConfig;
const App = () => {
  const queryClient = new QueryClient();
  const userStore = useUserStore((state: any) => state);
  const notificationStore = useNotificationStore((state: any) => state);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const socket = io(AppConfig.API_URL);
  const userId = userStore.user.user_id ?? "";
  useEffect(() => {
    socket.on(`schedule ${userId}`, (data: { message: any }) => {
      console.log("Received schedule event:", data);
      // @ts-ignore
      if (!receivedMessages.includes(data.message)) {
        notificationStore.setNotification(data);
        // @ts-ignore
        setReceivedMessages((prevMessages) => [...prevMessages, data.message]);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [receivedMessages, userId]);

  return (
    <SkeletonTheme baseColor="#E8E8E8" highlightColor="#C0C0C0">
      <QueryClientProvider client={queryClient}>
        <div className="overflow-x-hidden w-screen">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/goal-creation" element={<GoalCreationIntro />} />
            <Route path="/terms-and-conditons" element={<TermsCondition />} />
            <Route path="/monthly-income" element={<AddMonthlyIncome />} />
            <Route path="/goal-details" element={<AddGoalDetails />} />
            <Route
              path="/create-savings-goal"
              element={<CreateSavingsGoal />}
            />
            <Route path="/add-goal-details" element={<AddGoalDetails />} />
            <Route path="/goal-view" element={<GoalView />} />
            <Route path="/savings-trigger" element={<SavingsTrigger />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/goal-settings" element={<GoalSettings />} />
            <Route
              path="/savings-triggers-settings"
              element={<SavingsTriggersSettings />}
            />
            <Route
              path="/notification-settings"
              element={<NotificationSettings />}
            />
            <Route path="/delete-goal" element={<DeleteGoalSuccess />} />
            <Route path="image-selection" element={<CustomImageSelection />} />
            <Route
              path="/settings-monthly-income"
              element={<SettingsMonthlyIncome />}
            />
            <Route path="/update-goal" element={<UpdateGoalDetails />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </SkeletonTheme>
  );
};

export default App;
