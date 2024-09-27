import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import { TailSpin } from "react-loader-spinner";

import "./index.css";
import "./style.scss";

// Import critical components directly for faster initial load
import Overview from "./pages/overview/Overview";
import TermsOfUse from "./pages/terms-condition/TermsCondition";

// Lazy load less frequently used components
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
const SavingsTriggerSuccess = lazy(
  () => import("./pages/savings-triggers/SavingsTriggerSuccess")
);
const CreateGoalSavingsTrigger = lazy(
  () => import("./pages/goal-creation/savings-trigger/CreateGoalSavingsTrigger")
);

const Loader = () => (
  <div className="flex flex-col w-screen h-screen justify-center items-center">
    <TailSpin
      height="40"
      width="40"
      color="#0539ec"
      ariaLabel="tail-spin-loading"
      visible={true}
    />
  </div>
);

const App = () => {
  const queryClient = new QueryClient();

  return (
    <SkeletonTheme baseColor="#E8E8E8" highlightColor="#C0C0C0">
      <QueryClientProvider client={queryClient}>
        <div className="overflow-x-hidden w-screen">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route
              path="/goal-creation"
              element={
                <Suspense fallback={<Loader />}>
                  <GoalCreationIntro />
                </Suspense>
              }
            />
            <Route
              path="/terms-and-conditions"
              element={
                <Suspense fallback={<Loader />}>
                  <TermsCondition />
                </Suspense>
              }
            />
            <Route
              path="/monthly-income"
              element={
                <Suspense fallback={<Loader />}>
                  <AddMonthlyIncome />
                </Suspense>
              }
            />
            <Route
              path="/add-goal-details"
              element={
                <Suspense fallback={<Loader />}>
                  <AddGoalDetails />
                </Suspense>
              }
            />
            <Route
              path="/create-savings-goal"
              element={
                <Suspense fallback={<Loader />}>
                  <CreateSavingsGoal />
                </Suspense>
              }
            />
            <Route
              path="/goal-view"
              element={
                <Suspense fallback={<Loader />}>
                  <GoalView />
                </Suspense>
              }
            />
            <Route
              path="/savings-trigger"
              element={
                <Suspense fallback={<Loader />}>
                  <SavingsTrigger />
                </Suspense>
              }
            />
            <Route
              path="/notifications"
              element={
                <Suspense fallback={<Loader />}>
                  <Notifications />
                </Suspense>
              }
            />
            <Route
              path="/settings"
              element={
                <Suspense fallback={<Loader />}>
                  <Settings />
                </Suspense>
              }
            />
            <Route
              path="/goal-settings"
              element={
                <Suspense fallback={<Loader />}>
                  <GoalSettings />
                </Suspense>
              }
            />
            <Route
              path="/savings-triggers-settings"
              element={
                <Suspense fallback={<Loader />}>
                  <SavingsTriggersSettings />
                </Suspense>
              }
            />
            <Route
              path="/notification-settings"
              element={
                <Suspense fallback={<Loader />}>
                  <NotificationSettings />
                </Suspense>
              }
            />
            <Route
              path="/delete-goal"
              element={
                <Suspense fallback={<Loader />}>
                  <DeleteGoalSuccess />
                </Suspense>
              }
            />
            <Route
              path="/image-selection"
              element={
                <Suspense fallback={<Loader />}>
                  <CustomImageSelection />
                </Suspense>
              }
            />
            <Route
              path="/settings-monthly-income"
              element={
                <Suspense fallback={<Loader />}>
                  <SettingsMonthlyIncome />
                </Suspense>
              }
            />
            <Route
              path="/update-goal"
              element={
                <Suspense fallback={<Loader />}>
                  <UpdateGoalDetails />
                </Suspense>
              }
            />
            <Route
              path="/savings-triggers-success"
              element={
                <Suspense fallback={<Loader />}>
                  <SavingsTriggerSuccess />
                </Suspense>
              }
            />
            <Route
              path="/create-goal-savings-trigger"
              element={
                <Suspense fallback={<Loader />}>
                  <CreateGoalSavingsTrigger />
                </Suspense>
              }
            />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </SkeletonTheme>
  );
};

export default App;
