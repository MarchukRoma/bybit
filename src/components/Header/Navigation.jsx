import Li from "./Li";

const Navigation = () => {
  return (
    <nav className="text-[14px] leading-[48px] ml-[12px]">
      <ul className="flex">
        <Li
          active={true}
          className="border-b-2 border-[#ffb11a] mb-[2px] pt-[2px] text-[#ffb11a] leading-[46px]"
        >
          Kripto sotib oling
        </Li>
        <Li>Bozorlar</Li>
        <Li>Savdo</Li>
        <Li>Hosilalar</Li>
        <Li>Asboblar</Li>
        <Li>Moliya</Li>
      </ul>
    </nav>
  );
};

export default Navigation;
