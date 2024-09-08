import { useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ onView }) => {
  const [isClicked, setIsClicked] = useState(false);

  // Обробник події при натисканні на інпут
  const handleFocus = () => {
    setTimeout(() => {
      setIsClicked(true);
      mxnInput.current.value = "";
    }, 500); // Затримка у 500 мс
  };

  const [isClicked2, setIsClicked2] = useState(false);

  // Обробник події при натисканні на інпут
  const handleFocus2 = () => {
    setTimeout(() => {
      setIsClicked2(true);
    }, 500); // Затримка у 500 мс
  };

  const [listIsVisible, setListIsVisible] = useState(false);
  const MXN = {
    name: "MXN",
    price: 16.97782,
  };
  const UZS = {
    name: "UZS",
    price: 12608.72,
  };

  const ARS = {
    name: "ARS",
    price: 870.36,
  };
  const USD = {
    name: "USD",
    price: 1.0,
  };
  const CLP = {
    name: "CLP",
    price: 963.56,
  };

  const [activeCurrency, setActiveCurrency] = useState(UZS);

  const [buttonText, setButtonText] = useState("Komissiyasiz xarid qiling");

  const usdtInput = useRef(null);
  const mxnInput = useRef(null);
  const walletInput = useRef(null);

  // useEffect(() => {
  //   mxnInput.current.value = (
  //     usdtInput.current.value * activeCurrency.price
  //   ).toFixed(2);
  // }, [activeCurrency]);

  const formSubmit = (e) => {
    e.preventDefault();
    usdtInput.current.value = "";
    mxnInput.current.value = "";
    walletInput.current.value = "";

    onView();
  };

  const inputHandler = () => {
    if (usdtInput.current.value !== "") {
      setButtonText("Komissiyasiz soting");
    }
    mxnInput.current.value = (
      usdtInput.current.value * activeCurrency.price
    ).toFixed(2);
  };

  return (
    <form
      className="w-[520px] h-[604px] rounded-3xl bg-[#FFFFFF] shadow-lg"
      onSubmit={formSubmit}
    >
      <div className="flex w-full h-[80px] items-center text-[32px] bg-[#E9EDF2] rounded-t-3xl cursor-pointer">
        <div className="w-1/2 text-[#ADB1B8] text-center h-full pt-[20px] rounded-tl-3xl rounded-br-2xl">
          Sotib olish
        </div>
        <div className="w-1/2 text-center rounded-t-3xl bg-[#FFFFFF] h-full pt-[20px] text-[#121214]">
          Sotish
        </div>
      </div>
      <div className="text-black w-full flex flex-col items-center py-[30px]">
        <div className="w-[456px]">
          <span className="text-[#8b8d8a]">Sotish</span>
          <div className="border-[1px] rouned-lg w-[456px] p-[10px] shadow-sm flex items-center justify-between mt-2">
            <input
              className={`bg-inherit  ${isClicked ? "hidden-placeholder" : ""}`}
              placeholder={"Tegishli miqdorni kiriting"}
              type="number"
              ref={usdtInput}
              onChange={inputHandler}
              onFocus={() => {
                handleFocus();
              }}
            ></input>

            <div className="flex gap-4 items-center">
              <p className="text-[#D6850D]">Hammasi</p>
              <div className="bg-[#f1f3f0] flex items-center gap-2 cursor-pointer p-2">
                <img src="./usdt.svg" width="24" height="24"></img>
                <div>USDT</div>
                <span className="w-[12px] h-[12px]">
                  <img src="./drop-down-2.png"></img>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="self-end pr-[34px] text-[#8b8d8a] text-[14px] mt-2">
          Balans 93141.42 USDT{" "}
          <span className="text-[#D6850D]">Hozir transfer</span>
        </div>
        <div className="w-[456px]">
          <span className="text-[#8b8d8a]">Men olaman≈</span>
          <div className="border-[1px] rouned-lg w-[456px] p-[10px] shadow-sm flex items-center justify-between mt-2">
            <input
              className={`bg-inherit w-max ${
                isClicked ? "hidden-placeholder" : ""
              }`}
              // placeholder="Miqdorni kiriting"
              placeholder={"Tegishli miqdorni kiriting"}
              // ATTENTIONZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZz
              type="text"
              ref={mxnInput}
            ></input>
            <div className="flex gap-4 items-center">
              <div
                className="bg-[#f1f3f0] flex items-center gap-2 cursor-pointer p-2 relative"
                onClick={() => setListIsVisible(!listIsVisible)}
              >
                <img src="./mxn.svg" width="24" height="24"></img>
                <div>{activeCurrency.name}</div>
                <span className="w-[12px] h-[12px]">
                  <img src="./drop-down-2.png"></img>
                </span>
                {listIsVisible && (
                  <ul className="absolute top-[40px] left-0 bg-[#f1f3f0] flex flex-col gap-6 p-4">
                    <li
                      className="w-full"
                      onClick={() => {
                        setActiveCurrency(MXN);
                      }}
                    >
                      MXN(Мексика)
                    </li>
                    <li
                      className="w-full"
                      onClick={() => {
                        setActiveCurrency(ARS);
                      }}
                    >
                      ARS(Аргентина)
                    </li>
                    <li
                      onClick={() => {
                        setActiveCurrency(USD);
                      }}
                    >
                      USD(Еквадор)
                    </li>
                    <li
                      onClick={() => {
                        setActiveCurrency(CLP);
                      }}
                    >
                      CLP(Чілі)
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[456px] mt-4">
          <span className="text-[#8b8d8a]">
            Hisob raqami yoki telefon raqami
          </span>
          <div className="border-[1px] rouned-lg w-[456px] py-[18px] px-[10px] shadow-sm flex items-center justify-between  mt-2">
            <input
              ref={walletInput}
              className={`bg-inherit w-full ${
                isClicked2 ? "hidden-placeholder" : ""
              }`}
              placeholder="Hisob raqami yoki telefon raqamini kiriting"
              // placeholder="Tegishli miqdorni kiriting.."
              type="number"
              maxLength="8"
              onFocus={() => handleFocus2()}
            ></input>
            {/* <input
              className="bg-inherit"
              placeholder={
                placeholderVisibility.usdtInput
                  ? "Tegishli miqdorni kiriting.."
                  : ""
              }
              type="number"
              ref={usdtInputRef}
              onFocus={() => handleFocus("usdtInput")}
              onBlur={() => handleBlur("usdtInput")}
            /> */}
          </div>
        </div>
        <div className="text-[#8b8d8a] self-start ml-[34px] text-[14px] mt-14">
          1 USDT ≈ {activeCurrency.price} {activeCurrency.name}
        </div>
        <button
          type="submit"
          className={`w-[456px] rounded-lg  p-[12px] mt-2 transition duration-300 ease-in-out ${
            buttonText == "Komissiyasiz xarid qiling"
              ? "bg-[#F7A600] hover:bg-[#F7A600]/[50%]"
              : "bg-[#ee2f62] hover:bg-[#ee2f62]/[50%] text-white"
          }`}
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default Form;
