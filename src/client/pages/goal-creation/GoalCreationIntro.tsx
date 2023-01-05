import {useState} from 'react';

import MainButton from 'client/pages/components/MainButton';
import ConnectSlider from 'client/pages/components/mono/connect/ConnectSlider';
import NavBar from 'client/pages/components/NavBar';
import CloseButton from 'client/pages/components/CloseButton';
import money1 from 'client/assets/images/money1.svg';
import money2 from 'client/assets/images/money2.svg';
import money3 from 'client/assets/images/money3.svg';
import Routes from 'client/pages/routes';
import useAccountStore from 'client/store/accountStore';
import useConnectInfoStore from 'client/store/connectIntroStore';
import useUserStore from 'client/store/userStore';

const connectDetailsList = [
  {
    title: 'All your money in one app',
    subtitle:
      'You can now hook up all your accounts and track all your spending from one place.',
    image: money1,
  },
  {
    title: 'Link your account',
    subtitle:
      'M-Pesa, Absa, NCBA, and more accounts are all currently linkable.',
    image: money2,
  },
  {
    title: 'Automatic categorization',
    subtitle:
      'Our app now features automatic categorization of your transactions so you can see how you’re spending with no extra effort required.',
    image: money3,
  },
];
const Connect = () => {
  const filterAccountBy = useAccountStore((state: any) => state.filterBy);
  const slideInfoStore = useConnectInfoStore((state: any) => state);
  const userStore = useUserStore((state: any) => state);
  const slideIndex = slideInfoStore.slideIndex;
  const slidePages = () => {
    if (slideIndex >= 2) {
      if (userStore.user.tc_accepted) {
        document.dispatchEvent(
          new CustomEvent('toPage', {detail: {page: Routes.MONO}})
        );
        slideInfoStore.setSlideIndex(0);
      } else {
        document.dispatchEvent(
          new CustomEvent('toPage', {
            detail: {page: Routes.TERMSANDCONDITIONS},
          })
        );
        slideInfoStore.setSlideIndex(0);
      }
    } else {
      slideInfoStore.setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className="h-screen ">
      <div className="flex flex-col bg-white">
        <div className="mt-6 mx-3.5">
          <NavBar
            children={
              <div className="flex flex-row justify-end">
                <CloseButton
                  onClick={() => {
                    filterAccountBy(null);
                    document.dispatchEvent(new CustomEvent('closePage'));
                    slideInfoStore.setSlideIndex(0);
                  }}
                />
              </div>
            }
          />
        </div>
        <div className="mt-20 mb-16">
          <ConnectSlider details={connectDetailsList} index={slideIndex} />
        </div>
        <div className="flex flex-row mt-16 fixed bottom-0 left-3 right-3">
          <MainButton
            title={`${slideIndex === 2 ? 'I understand' : 'Next'}`}
            click={() => slidePages()}
          />
        </div>
      </div>
    </div>
  );
};

export default Connect;
