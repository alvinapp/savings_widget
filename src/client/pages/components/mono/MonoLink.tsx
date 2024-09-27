import { FiInfo } from "react-icons/fi";
type MonoLinkProps = {
  title?: string;
  text?: string;
  icon?: any;
  iconComponent?: any;
  iconBg?: boolean;
  showRightIcon?: boolean;
};

const MonoListItem = ({
  title,
  text,
  icon,
  iconComponent,
  iconBg = true,
  showRightIcon = true,
}: MonoLinkProps) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div
          className={`w-10 h-10  rounded-full flex justify-center items-center p-3 ${
            iconBg ? "bg-icon_bg/30" : ""
          }`}
        >
          {iconComponent != null ? iconComponent : <img src={icon!} />}
        </div>
      </div>
      <div className="flex flex-col ml-4 pr-11">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="text-black font-custom text-sm font-semibold">
              {title}
            </div>
            <div className="text-gray font-custom text-xs font-medium tracking-listtile_subtitle leading-5">
              {text}
            </div>
          </div>
          {showRightIcon ? (
            <div className="fixed right-10 mt-3">
              <FiInfo color="#9BC1D0" size="1.0418rem" />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MonoListItem;
