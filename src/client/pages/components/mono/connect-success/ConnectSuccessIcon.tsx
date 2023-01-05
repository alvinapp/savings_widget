type ConnectSuccessIconProps = {
  icon?: string;
};

const ConnectSuccessIcon = ({icon}: ConnectSuccessIconProps) => {
  return (
    <div className="">
      <img src={icon} alt="" />
    </div>
  );
};

export default ConnectSuccessIcon;
