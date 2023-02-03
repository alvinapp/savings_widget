import {useState} from 'react';
import {FiXCircle} from 'react-icons/fi';
import {useQuery} from 'react-query';

import unlinkAccount from 'client/api/unlink-account';
import useAccountStore from 'client/store/accountStore';
import {IConfig, useConfigurationStore} from 'client/store/configuration';
import Routes from 'client/pages/routes';
export const UnlinkAccount = ({
  visible,
  onClose,
}: {
  visible?: boolean;
  onClose?: any;
}) => {
  const handleOnClose = (e: any) => {
    e.stopPropagation();
    onClose();
    setProceed(false);
  };
  const next = (e: any) => {
    e.stopPropagation();
    setProceed(true);
  };
  const [proceed, setProceed] = useState(false);
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const accountStore = useAccountStore((state: any) => state);

  const {data, error, isLoading, refetch}: any = useQuery(
    'unlinkAccount',
    () =>
      unlinkAccount({
        configuration: configuration,
        account_id: accountStore.account_id,
      })
        .then((result) => {
          if (result) {
            onClose();
          }

          return result;
        })
        .catch((error) => {
          return error;
        }),
    {
      refetchOnWindowFocus: true,
      enabled: false,
    }
  );
  const refetchData = (e: any) => {
    e.stopPropagation();
    refetch();
    document.dispatchEvent(
      new CustomEvent('toPage', {
        detail: {page: Routes.UNLINKSUCCESS, replace: true},
      })
    );
  };
  if (!visible) return null;

  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-popup_shadow/60 transition-opacity"></div>
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          onClick={handleOnClose}
        >
          <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
            {proceed ? (
              <div className="relative transform overflow-hidden rounded-t-3xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-3 sm:text-left">
                      <div className="mt-8">
                        <div className="text-tiny text-black font-poppins font-medium tracking-listtile_subtitle text-start">
                          {`Are you sure you’d like to continue to unlink your `}{' '}
                          <span className="text-tiny text-black font-poppins font-semibold tracking-listtile_subtitle text-start">{`${accountStore.account_name} `}</span>
                          <span className="text-tinytext-black font-poppins font-medium tracking-listtile_subtitle text-start">
                            {'account?'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-5">
                  <button
                    type="button"
                    className=" border border-b-primary rounded-lg text-base font-semibold tracking-longtext font-poppins text-primary_light py-3.5 mx-3.5 mb-3"
                    onClick={refetchData}
                  >
                    Yes, continue
                  </button>
                  <button
                    type="button"
                    className="rounded-lg text-base font-semibold tracking-longtext font-poppins text-gray_light py-3.5 mx-3.5 mb-4"
                    onClick={handleOnClose}
                  >
                    No, let's keep it 
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative transform overflow-hidden rounded-t-3xl bg-white shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-full w-full">
                <div className="bg-white p-4">
                  <div className="flex flex-row items-center justify-center mt-3">
                    <button
                      onClick={next}
                      type="button"
                      className="rounded-lg text-base font-semibold tracking-longtext font-poppins text-primary_light py-3.5 mx-3.5 mb-3 flex flex-row items-center select-none"
                    >
                      <span className="mr-2">
                        <FiXCircle color="#04506E" />
                      </span>
                      Unlink account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
