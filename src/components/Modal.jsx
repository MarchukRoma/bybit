import gsap from "gsap";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Modal = ({ onClose }) => {
  const closeHandler = () => {
    onClose();
  };
  useEffect(() => {
    gsap.fromTo(
      "#modal",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <div className="w-screen h-screen bg-black/50 absolute top-0 left-0 flex items-center justify-center">
      <div
        id="modal"
        className="bg-white w-[600px] h-[500px] flex flex-col items-center text-[#a7a6ac] p-8 text-[28px]"
        style={{ borderRadius: "15px" }}
      >
        <img src="./warning.png" width="25%" alt="" />
        <div className="text-center leading-[30px] mt-[28px] font-[500]">
          Hurmatli mijoz. Omonatingizni yechib olish uchun minimal miqdor - 2400
          dollar. Pulingizni yechib olish uchun 200 AQSh dollari miqdorida
          depozit kiritishingiz kerak.
          <p>Assalomu alaykum ByBit ma&apos;muriyati</p>
        </div>
        <div className="flex text-[#84848a] w-full gap-[5%] mt-[34px]">
          <button
            className="rounded-lg bg-[#ebebf1] w-[47.5%] py-4"
            onClick={closeHandler}
          >
            Bekor qilish
          </button>
          <button
            className="rounded-lg bg-[#f8da31] w-[47.5%] py-4 hover:bg-[#f8da31]/[70%]"
            onClick={closeHandler}
          >
            Transferga o&apos;ting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
