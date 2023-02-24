import { searchImages } from "client/api/goal";
import useGoalStore from "client/store/goalStore";
import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import CloseButton from "../components/CloseButton";
import { ImageCard } from "../components/goal-creation/ImageCard";
import NavBar from "../components/NavBar";

export const CustomImageSelection = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const goal = useGoalStore((state: any) => state);
  const [timer, setTimer] = useState();

  const inputChanged = (e: any) => {
    setSearch(e.target.value);

    clearTimeout(timer);

    const newTimer: any = setTimeout(() => {
      deleteTheGoal();
    }, 700);

    setTimer(newTimer);
  };
  const {
    data: images,
    isLoading,
    error,
    refetch: deleteTheGoal,
  } = useQuery("delete goal", () => searchImages({ searchText: search }), {
    refetchOnWindowFocus: true,
    enabled: false,
  });
  const unSplashImages = images ?? [];
  return (
    <div className="h-screen w-screen bg-skin-base">
      <div className="shadow-card h-20 flex flex-col items-center justify-center px-3">
        <NavBar
          children={
            <div className="flex flex-row justify-between items-center">
              <BackButton
                onClick={() => {
                  navigate(-1);
                }}
              />
              <div className="font-poppins text-base text-skin-subtitle font-medium tracking-progress_label w-56 ml-6">
                <input
                  type="text"
                  className="outline-none"
                  placeholder={`Search '${goal.selectedGoal.goalName ?? ""}'`}
                  value={search}
                  onChange={inputChanged}
                />
              </div>
              <CloseButton
                onClick={() => {
                  navigate(-3);
                }}
              />
            </div>
          }
        />
      </div>
      <div className="pl-6 pr-2 pt-3.5 grid grid-cols-3 gap-x-0 gap-y-5 md:grid-cols-3 lg:grid-cols-4">
        {isLoading ? (
          <div className="flex flex-row justify-center w-screen">
            <TailSpin
              height="30"
              width="30"
              radius={2}
              color="#056489"
              ariaLabel="tail-spin-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          unSplashImages.map((image: any) => {
            return (
              <ImageCard
                image={image.urls.small}
                onClick={() => {
                  goal.setGoalImageUrl(image.urls.small);
                  navigate(-1);
                }}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
