const RightPart = () => {
  return (
    <div className="flex items-center text-[14px]">
      <div className="flex items-center max-[1561px]:hidden">
        <div className="bg-[#f7a600] rounded-[4px] text-[#121214] py-[6px] px-[16px] ">
          Depozit
        </div>
        <div className="ml-[16px]">Aktivlar</div>
        <span>
          <img src="./drop-down.png" />
        </span>
        <div className="ml-[16px]">Buyurtmalar</div>
        <span>
          <img src="./drop-down.png" />
        </span>
      </div>

      <img src="./profile-icon.png" className="ml-[18px]"></img>
      <div className="flex items-center gap-6 mr-[14px] ml-[18px]">
        <img src="./dzvinok.png"></img>
        <img src="./download.png"></img>
        <img src="./language.png"></img>
      </div>
    </div>
  );
};

export default RightPart;
