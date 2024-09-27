import React from "react";
import NavBar from "../components/NavBar";
import BackButton from "../components/BackButton";
import { fetchData } from "client/api/api";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import CloseButton from "../components/CloseButton";
import NavBarTitle from "../components/NavBarTitle";
import parse from "html-react-parser";
export const TermsOfUse = () => {
  const navigate = useNavigate();
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const { data, error, isLoading }: any = useQuery(
    "fetchingTerms",
    () =>
      fetchData({
        endpoint: "/terms_and_conditions",
        token: configuration!.token,
      }).then((result) => {
        const finalResult = result.terms_n_conditions.replace(/[{()}]/g, "");

        return finalResult.replace(/"/g, "");
      }),
    {
      refetchOnWindowFocus: false,
    }
  );
  return (
    <div className="h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 bg-white pl-2 pr-4 pt-4 pb-3">
        <NavBar
          children={
            <div className="flex flex-row justify-between items-center">
              <BackButton
                onClick={() => {
                  navigate(-1);
                }}
              />
              <NavBarTitle title="Terms & Conditions" />
              <CloseButton
                onClick={() => {
                  navigate(-2);
                }}
              />
            </div>
          }
        />
      </div>
      <div className="flex flex-col pl-4 pr-6 mt-24">
        <div className="text-base font-custom text-black tracking-paragraph leading-6 font-light pb-8">
          {parse(data ?? "")}
        </div>
      </div>
    </div>
  );
};
