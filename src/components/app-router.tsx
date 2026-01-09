// Modules
import * as React from "react";
import { Route, Routes } from "react-router-dom";

// Common
import { appConfig } from "@/common/configs.common";

// Types
interface AppRouterProps {}

// Component
export const AppRouter: React.FC<AppRouterProps> = (): React.ReactElement => {
  // State
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [isAppStarting, setIsAppStarting] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsAppStarting(false);
      setIsLoggedIn(true);
    }, 1000);
  }, []);

  if (isAppStarting) {
    return (
      <div className="w-dvw h-dvh flex items-center justify-center">
        <div className="w-48 flex flex-col items-center justify-center">
          <p className="mb-6">{appConfig.appName}</p>
        </div>
      </div>
    );
  }

  if (isLoggedIn) {
    return (
      <div className="w-dvw h-dvh flex">
        <Routes>
          <Route path="/" element="You are home!" />
        </Routes>
      </div>
    );
  }

  return (
    <div className="w-dvw h-dvh flex">
      <Routes>
        <Route path="/" element="Application" />
      </Routes>
    </div>
  );
};
