import { FiPause } from "react-icons/fi";

type PauseButtonProps = {
  onClick?: () => void;
  size?: string;
};
export const PauseButton = ({ onClick, size }: PauseButtonProps) => {
  return (
    <button
      className={`rounded-full ${
        size ? size : "h-14 w-14"
      } outline outline-1 outline-skin-primary text-skin-primary flex items-center justify-center`}
      onClick={onClick}
    >
      <div className="p-2.5">
        <FiPause size="1.5rem" />
      </div>
    </button>
  );
};
