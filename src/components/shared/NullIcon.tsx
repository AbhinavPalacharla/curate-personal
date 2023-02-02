const NullIcon: React.FC = () => {
  return (
    <div className="flex flex-row items-center w-[17px] justify-between">
      <div className="flex flex-col items-center h-[16px] p-0.5 justify-between">
        <div className="bg-[#969696] h-[2.25px] w-[2.25px] rounded-full" />
        <div className="bg-[#969696] h-[2.25px] w-[2.25px] rounded-full" />
      </div>
      <div className="flex flex-col items-center h-[16px] p-0.5 justify-between">
        <div className="bg-[#969696] h-[2.25px] w-[2.25px] rounded-full" />
        <div className="bg-[#969696] h-[2.25px] w-[2.25px] rounded-full" />
      </div>
    </div>
  );
};

export { NullIcon };
