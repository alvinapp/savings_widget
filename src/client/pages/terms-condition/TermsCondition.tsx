import React, { useEffect } from "react";
import { useQuery } from "react-query";
import parse from "html-react-parser";

import MainButton from "client/pages/components/MainButton";
import NavBarTitle from "client/pages/components/NavBarTitle";
import BackButton from "client/pages/components/BackButton";
import NavBar from "client/pages/components/NavBar";
import CloseButton from "client/pages/components/CloseButton";
import Routes from "client/pages/routes";
import { acceptTerms } from "client/api/accept-terms";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import getToken from "client/api/token";
import useUserStore from "client/store/userStore";
import { fetchData } from "client/api/api";
import { useNavigate } from "react-router-dom";
const TermsCondition = () => {
  const navigate = useNavigate();
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const userStore = useUserStore((state: any) => state);
  const { refetch }: any = useQuery(
    "accept-terms",
    () =>
      acceptTerms({ configuration: configuration, accept: true })
        .then((result) => {
          if (result) {
            getToken(configuration).then((result) => {
              userStore.setUser(result.user);
              document.dispatchEvent(
                new CustomEvent("toPage", {
                  detail: { page: Routes.MONO, replace: true },
                })
              );
            });
          }
        })
        .catch((error) => error),
    {
      refetchOnWindowFocus: true,
      enabled: false,
    }
  );
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
  const acceptTermsAndCondition = () => {
    refetch();
  };

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
        <div className="text-base font-poppins text-black tracking-paragraph leading-6 font-light pb-8">
          {parse(data ?? "")}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 px-3.5 bg-white">
        <MainButton title="Ok" click={() => navigate("/monthly-income")} />
      </div>
    </div>
  );
};
export default TermsCondition;
