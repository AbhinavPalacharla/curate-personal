const NullIcon: React.FC<{ size?: "SMALL" | "REGULAR" | "LARGE" }> = ({
  size,
}) => {
  if (size === "SMALL") {
    return (
      <div className="flex flex-row items-center min-w-[18px] max-w-[18px] justify-between px-0.5">
        <div className="flex flex-col items-center min-h-[18px] max-h-[18px] justify-between py-0.5">
          <div className="bg-[#969696] h-[0.17rem] w-[0.17rem] rounded-full" />
          <div className="bg-[#969696] h-[0.17rem] w-[0.17rem] rounded-full" />
        </div>
        <div className="flex flex-col items-center min-h-[18px] max-h-[18px] justify-between py-0.5">
          <div className="bg-[#969696] h-[0.17rem] w-[0.17rem] rounded-full" />
          <div className="bg-[#969696] h-[0.17rem] w-[0.17rem] rounded-full" />
        </div>
      </div>
    );
  }

  if (size === "LARGE") {
    return (
      <div className="flex flex-row items-center min-w-[1.21rem] max-w-[1.21rem] justify-between px-0.5">
        <div className="flex flex-col items-center min-h-[1.21rem] max-h-[1.21rem] justify-between py-0.5">
          <div className="bg-[#969696] h-[0.16rem] w-[0.16rem] rounded-full" />
          <div className="bg-[#969696] h-[0.16rem] w-[0.16rem] rounded-full" />
        </div>
        <div className="flex flex-col items-center min-h-[1.21rem] max-h-[1.21rem] justify-between py-0.5">
          <div className="bg-[#969696] h-[0.16rem] w-[0.16rem] rounded-full" />
          <div className="bg-[#969696] h-[0.16rem] w-[0.16rem] rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center w-4 justify-between">
      <div className="flex flex-col items-center h-4 justify-between">
        <div className="bg-[#969696] h-[0.15rem] w-[0.15rem] rounded-full" />

        <div className="bg-[#969696] h-[0.15rem] w-[0.15rem] rounded-full" />
      </div>
      <div className="flex flex-col items-center h-4 justify-between">
        <div className="bg-[#969696] h-[0.15rem] w-[0.15rem] rounded-full" />
        <div className="bg-[#969696] h-[0.15rem] w-[0.15rem] rounded-full" />
      </div>
    </div>
  );
};
export { NullIcon };
