import React from "react";
import {
  FiBell,
  FiBriefcase,
  FiChevronRight,
  FiFileText,
  FiFlag,
  FiTrendingUp,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import NavBar from "../components/NavBar";
import NavBarTitle from "../components/NavBarTitle";
import { SettingsCard } from "../components/settings/SettingsCard";

export const Settings = () => {
  const navigate = useNavigate();
  const currencySymbol = "₦";
  const amount = 200000;
  const goals = 10;
  const accounts = 3;
  const activeSavigsTriggers = 4;
  return (
    <div className="pt-6 flex flex-col h-screen w-screen">
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
              <NavBarTitle title="Settings" />
            </div>
            <div className="flex flex-col">
              <div className="">
                <div className="rounded-full h-10 w-10"></div>
              </div>
            </div>
          </div>
        }
      />
      <div className="mt-6 mx-3.5">
        <div className="font-workSans font-semibold tracking-tab_text text-tiny mb-3 text-skin-subtitle">
          Finance
        </div>
        <SettingsCard
          title="Monthly income"
          subtitle={`${currencySymbol} ${amount}`}
          leading={<FiBriefcase />}
          iconBackground={"bg-skin-iconPrimary"}
          iconColor="text-skin-successTertiary"
          trailing={<FiChevronRight />}
        />
        <div className="mt-2">
          <SettingsCard
            title="Accounts"
            subtitle={`${accounts} accounts`}
            leading={<FiBriefcase />}
            iconBackground={"bg-skin-iconPrimary"}
            iconColor="text-skin-successTertiary"
            trailing={<FiChevronRight />}
          />
        </div>
      </div>
      <div className="mt-6 mx-3.5">
        <div className="font-workSans font-semibold tracking-tab_text text-tiny mb-3 text-skin-subtitle">
          Savings preference
        </div>
        <SettingsCard
          title="Goals"
          subtitle={`${goals} goals`}
          leading={<FiFlag />}
          iconBackground={"bg-skin-iconSecondary"}
          iconColor="text-skin-iconSecondaryy"
          trailing={<FiChevronRight />}
        />
        <div className="mt-2">
          <SettingsCard
            title="Savings triggers"
            subtitle={`${activeSavigsTriggers} active`}
            leading={<FiTrendingUp />}
            iconBackground={"bg-skin-iconSecondary"}
            iconColor="text-skin-iconSecondary"
            trailing={<FiChevronRight />}
          />
        </div>
        <div className="mt-2">
          <SettingsCard
            title="Notifications"
            leading={<FiBell />}
            iconBackground={"bg-skin-iconSecondary"}
            iconColor="text-skin-iconSecondary"
            trailing={<FiChevronRight />}
          />
        </div>
      </div>
      <div className="mt-6 mx-3.5">
        <div className="font-workSans font-semibold tracking-tab_text text-tiny mb-3 text-skin-subtitle">
          More
        </div>
        <SettingsCard
          title="Terms of use"
          leading={<FiFileText />}
          iconBackground={"bg-skin-iconTertiary"}
          iconColor="text-skin-iconTertiary"
          trailing={<FiChevronRight />}
        />
        <div className="mt-2 mb-8">
          <SettingsCard
            title="Privacy policy"
            subtitle={`${activeSavigsTriggers} active`}
            leading={<FiFileText />}
            iconBackground={"bg-skin-iconTertiary"}
            iconColor="text-skin-iconTertiary"
            trailing={<FiChevronRight />}
          />
        </div>
      </div>
    </div>
  );
};
