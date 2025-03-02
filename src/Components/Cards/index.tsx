import Logo from "../../assets/appLogoBule.png";
import { cardData } from "../../reusableFunction";

const Cards = () => {
  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:gap-[3rem] md:gap-[3rem] sm:gap-[2rem] xs:gap-[1rem] justify-center lg:mx-[5rem] md:mx-[5rem] sm:mx-[5rem] xs:mx-[2rem] ">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="lg:w-full md:w-full sm:w-full xs:w-full lg:gap-1 mt-1 lg:h-[205px] md:h-[170px] sm:h-[150px] xs:h-[155px] bg-[#fff] rounded-xl flex flex-col items-center justify-start shadow-md p-4"
        >
          <div className="flex flex-row lg:gap-3 md:gap-1 lg:px-[1rem] xs:px-1 xs:gap-[1rem] mt-3 w-full justify-start">
            <div className="flex relative items-center justify-center">
              <img
                src={Logo}
                alt="Logo"
                className="lg:w-[35px] md:w-[20px] sm:w-[30px] xs:w-[30pxpx] lg:h-[35px] md:h-[20px] sm:h-[30px] xs:h-[30px]"
              />
            </div>
            <div className="flex flex-col leading-5">
              <h1 className="lg:text-[24px] md:text-[16px] sm:text-[20px] xs:text-[20px] text-[#002e72] font-semibold ">
                {card.title}
              </h1>
              <h3 className="lg:text-[12px] md:text-[9px] sm:text-[10px] xs:text-[8px] text-[#0764bf]">
                {card.subtitle}
              </h3>
            </div>
          </div>
          <p className="lg:text-[16px] md:text-[9px] sm:text-[18px] xs:text-[12px] w-full lg:px-[1rem] md:px-[1rem] font-medium text-start mt-3">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
