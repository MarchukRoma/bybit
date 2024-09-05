const Subheader = () => {
  return (
    <header className="h-[80px] w-screen flex justify-center pt-[43px]">
      <div className="w-[1200px] h-full flex justify-between text-[#81858c] text-[14px]">
        <nav className="h-full">
          <ul className="flex  gap-[24px] h-full cursor-pointer">
            <li className="text-[#f7a600] font-[IBMPlexSans-Bold] border-b-2 border-[#f7a600] h-full">
              Bir marta bosish bilan sotib oling
            </li>
            <li>P2P</li>
            <li>Fiat depoziti</li>
            <li>Avtomatik investitsiya</li>
            <li>Bybit Card</li>
            <li>Konvertatsiya qilish</li>
          </ul>
        </nav>
        <nav>
          <ul className="flex gap-6">
            <li className="flex items-center gap-[4px]">
              Buyurtmalar{" "}
              <span>
                <img src="./arrow.png"></img>
              </span>
            </li>
            <li className="flex items-center">
              <p>Foydalanuvchi markazi</p>
              <img src="./vip.png" className="ml-[4px]"></img>
              <span className="w-[14px] h-[14px]">
                <img src="./drop-down-2.png"></img>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Subheader;
