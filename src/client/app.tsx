import { lazy, Suspense, useEffect, useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import io from "socket.io-client";
import useNotificationStore from "./store/notificationStore";
import useUserStore from "./store/userStore";
import "./index.css";
import "./style.scss";
import { TailSpin } from "react-loader-spinner";

declare var AppConfig: AppConfig;

const Overview = lazy(() => import("./pages/overview/Overview"));
const TermsCondition = lazy(
  () => import("./pages/terms-condition/TermsCondition")
);
const GoalCreationIntro = lazy(
  () => import("./pages/goal-creation/GoalCreationIntro")
);
const AddMonthlyIncome = lazy(
  () => import("./pages/goal-creation/AddMonthlyIncome")
);
const CreateSavingsGoal = lazy(
  () => import("./pages/goal-creation/CreateSavingsGoal")
);
const AddGoalDetails = lazy(
  () => import("./pages/goal-creation/AddGoalDetails")
);
const GoalView = lazy(() => import("./pages/goal-view/GoalView"));
const SavingsTrigger = lazy(
  () => import("./pages/savings-triggers/SavingsTrigger")
);
const Settings = lazy(() => import("./pages/settings/Settings"));
const GoalSettings = lazy(() => import("./pages/settings/GoalSettings"));
const SavingsTriggersSettings = lazy(
  () => import("./pages/settings/SavingsTriggersSettings")
);
const NotificationSettings = lazy(
  () => import("./pages/settings/NotificationSettings")
);
const Notifications = lazy(() => import("./pages/notications/Notifications"));
const DeleteGoalSuccess = lazy(
  () => import("./pages/goal-view/DeleteGoalSuccess")
);
const CustomImageSelection = lazy(
  () => import("./pages/goal-creation/CustomImageSelection")
);
const SettingsMonthlyIncome = lazy(
  () => import("./pages/settings/SettingsMonthlyIncome")
);
const UpdateGoalDetails = lazy(() => import("./pages/update-goal/UpdateGoal"));

const App = () => {
  const queryClient = new QueryClient();
  const userStore = useUserStore((state: any) => state);
  const notificationStore = useNotificationStore((state: any) => state);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const socket = io(AppConfig.API_URL);
  const userId = userStore.user.user_id ?? "";

  useEffect(() => {
    socket.on(`schedule ${userId}`, (data: { message: any }) => {
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
          <Suspense
            fallback={
              <div className="flex flex-col w-screen h-screen justify-center items-center">
                <TailSpin
                  height="40"
                  width="40"
                  color="#056489"
                  ariaLabel="tail-spin-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            }
          >
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
              <Route
                path="/image-selection"
                element={<CustomImageSelection />}
              />
              <Route
                path="/settings-monthly-income"
                element={<SettingsMonthlyIncome />}
              />
              <Route path="/update-goal" element={<UpdateGoalDetails />} />
            </Routes>
          </Suspense>
        </div>
      </QueryClientProvider>
    </SkeletonTheme>
  );
};

export default App;
