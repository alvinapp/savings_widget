import image from "client/assets/images/savings/empty-state.svg";
export const UpcomingSavingsEmptyState = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-row justify-center mb-3">
        <img src={image} />
      </div>
      <div className="flex flex-row justify-center font-workSans font-semibold text-base tracking-title text-skin-neutral mb-3">
        No registered upcoming savings yet!
      </div>
      <div className="flex flex-row justify-center font-workSans font-medium text-tiny tracking-listtile_subtitle text-center text-skin-subtitle mx-12"></div>
    </div>
  );
};
