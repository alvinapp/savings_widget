type ConnectSuccessTitle = {
  title?: string;
};

const ConnectSuccessTitle = ({title}: ConnectSuccessTitle) => {
  return (
    <div className="text-white font-workSans text-xl font-semibold tracking-wide leading-6">
      {title}
    </div>
  );
};

export default ConnectSuccessTitle;
