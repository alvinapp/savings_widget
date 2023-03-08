import Slider from "react-slick";
import AccountCard from "client/pages/components/AccountCard";
import Account from "client/models/Account";
import { useEffect, useState } from "react";
// import {fetchAccounts, fetchToken} from 'client/state/overview';
import getAccounts from "client/api/accounts";
import useAccountStore from "client/store/accountStore";
import Accounts from "client/models/Accounts";

type AccountCardProps = {
  accounts?: Array<Account>;
  deleteAccount?: () => void;
};
const AccountCardsSlider = ({ accounts, deleteAccount }: AccountCardProps) => {
  const settings = {
    mobileFirst: true,
    dots: false,
    arrows: false,
    centerMode: true,
    infinite: false,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 300,
    slidesToScroll: 1,
    initialSlide: 0,
    swipe: true,
    swipeToSlide: true,
    className: "account_slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {accounts?.map((element: Account, i) => {
        return (
          <AccountCard
            key={i}
            account={element}
            deleteAccount={deleteAccount}
          />
        );
      })}
    </Slider>
  );
};
export default AccountCardsSlider;
