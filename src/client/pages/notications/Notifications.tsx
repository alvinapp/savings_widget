import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import NavBar from "../components/NavBar";
import NavBarTitle from "../components/NavBarTitle";
import { NotificaitonCard } from "../components/notificaitons/NotificaitonCard";

export const Notifications = () => {
  const navigate = useNavigate();
  const currentDate = new Date();
  return (
    <div className="flex flex-col relative pt-6">
      <NavBar
        children={
          <div className="flex flex-row items-center justify-between mr-3.5">
            <div className="flex flex-col">
              <BackButton
                background="bg-skin-base"
                onClick={() => navigate(-1)}
              />
            </div>
            <div className="flex flex-col">
              <NavBarTitle title="Notifications" />
            </div>
            <div className="flex flex-col">
              <div className="rounded-full h-10 w-10"></div>
            </div>
          </div>
        }
      />
      <div className="flex flex-col mt-9 mx-3.5">
        <NotificaitonCard
          date={currentDate}
          description="Resume your Marie store goal today to stay on 🎯track!"
        />
      </div>
    </div>
  );
};
