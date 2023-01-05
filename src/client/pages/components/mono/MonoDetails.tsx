import MonoListItem from 'client/pages/components/mono/MonoLink';
import sun from 'client/assets/images/sun.svg';
import activity from 'client/assets/images/activity.svg';
import bank from 'client/assets/images/bank.svg';
const MonoDetails = () => {
  return (
    <>
      <div className="flex flex-col mt-8">
        <div className="flex justify-between items-stretch mx-4 my-3 border-b border-border_color pb-3.5 px-4">
          <MonoListItem
            showRightIcon={false}
            icon={sun}
            title="About Mono"
            text="Our partner directly integrated to M-Pesa and Kenyan banks."
          />
          <div className="mr-6 mt-2 my-4  rounded-full"></div>
        </div>
        <div className="flex justify-between items-stretch mx-4 my-4 border-b border-border_color pb-3.5 px-4">
          <MonoListItem
            showRightIcon={false}
            icon={activity}
            title="About Alvin"
            text="Our partner enabling categorized views of your expenses."
          />
        </div>
        <div className="flex justify-between items-stretch mx-4 my-3 px-4">
          <MonoListItem
            showRightIcon={false}
            icon={bank}
            title="You are in control"
            text="Your data is never sold to any party and you can unlink accounts at any time."
          />
        </div>
      </div>
    </>
  );
};
export default MonoDetails;
