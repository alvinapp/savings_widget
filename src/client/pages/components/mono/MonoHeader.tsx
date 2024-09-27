type MonoHeaderProps = {
  title?: string;
  text?: string;
};

const MonoHeader = ({ title, text }: MonoHeaderProps) => {
  return (
    <>
      <div className="flex flex-col mx-4 my-4">
        <div className="text-black font-custom text-xl font-semibold leading-6 tracking-wide">
          {title}
        </div>
        <div className="font-custom text-xxxs tracking-wide leading-4 mt-4 text-header_subtitle font-light mr-14">
          {text}
        </div>
      </div>
    </>
  );
};
export default MonoHeader;
