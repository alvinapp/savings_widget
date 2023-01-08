import { useEffect, useState } from "react";
import "client/index.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "react-query";

import Routes from "client/pages/routes";
import TermsCondition from "client/pages/terms-condition/TermsCondition";
import Connect from "client/pages/goal-creation/GoalCreationIntro";
import ConnectSuccess from "client/pages/goal-creation/ConnectSuccess";
import UnlinkSuccess from "./pages/goal-creation/UnlinkSuccess";
import Overview from "client/pages/overview/overview";

const pageHistory: string[] = [];

const App = () => {
  const [page, setPage] = useState<String>("/");
  const queryClient = new QueryClient();
  useEffect(() => {
    document.addEventListener("toPage", ({ detail }: any) => {
      const page = detail["page"];
      const replace = detail["replace"] as boolean;
      if (replace == true && pageHistory.length > 0) {
        pageHistory[pageHistory.length - 1] = page;
      } else {
        pageHistory.push(page);
      }
      setPage(page);
    });
    document.addEventListener("closePage", () => {
      const page = pageHistory.pop() || "/";
      setPage(page);
    });
  });

  const renderPage = () => {
    switch (page) {
      case Routes.HOME:
        return <Overview />;
      case Routes.CONNECT:
        return <Connect />;
      case Routes.TERMSANDCONDITIONS:
        return <TermsCondition />;
      case Routes.CONNECTSUCCESS:
        return <ConnectSuccess />;
      case Routes.UNLINKSUCCESS:
        return <UnlinkSuccess />;
      default:
        return <Overview />;
    }
  };

  return (
    <SkeletonTheme baseColor="#E8E8E8" highlightColor="#C0C0C0">
      <QueryClientProvider client={queryClient}>
        <div className="overflow-x-hidden w-screen">
          <Overview />
        </div>
      </QueryClientProvider>
    </SkeletonTheme>
  );
};

export default App;
