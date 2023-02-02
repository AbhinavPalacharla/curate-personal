const NullIcon: React.FC<{ size?: "REGULAR" | "LARGE" }> = ({ size }) => {
  if (size === "LARGE") {
    return (
      <div className="flex flex-row items-center w-[1.21rem] justify-between">
        <div className="flex flex-col items-center h-[1.21rem] justify-between">
          <div className="bg-[#969696] h-[0.19rem] w-[0.19rem] rounded-full" />

          <div className="bg-[#969696] h-[0.19rem] w-[0.19rem] rounded-full" />
        </div>
        <div className="flex flex-col items-center h-[1.21rem] justify-between">
          <div className="bg-[#969696] h-[0.19rem] w-[0.19rem] rounded-full" />
          <div className="bg-[#969696] h-[0.19rem] w-[0.19rem] rounded-full" />
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
