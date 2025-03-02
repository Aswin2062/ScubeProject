import { RxCheckCircled } from "react-icons/rx";
import Image from "../../assets/aboutPage.png";
import { aboutPoints } from "../../reusableFunction";

const AboutPage = () => {
  return (
    <div className="w-full h-full flex md:flex-col">
      <div className="w-full lg:mt-[7rem] md:mt-[5rem] sm:mt-[3rem] xs:mt-[3rem] flex lg:flex-row md:flex-col md:gap-[2rem] sm:gap-[2rem] sm:flex-col xs:flex-col">
        <div className="lg:w-[50%] md:w-[full] sm:w-[full] xs:w-[full] lg:ml-[5rem] md:mx-[5rem] sm:mx-[5rem] xs:mx-[2rem]">
          <h1 className="font-bold lg:text-[40px] md:text-[30px] sm:text-[20px] xs:text-[16px] font-['Lato'] text-[#002e72]">
            About Impactable
          </h1>
          <p className="text-[#090914] font-['Inter'] font-normal text-[18px] mt-[1rem]">
            We are driven by the belief that investment can make a positive
            impact - without compromising returns:
          </p>

          {aboutPoints.map((point, index) => (
            <div key={index} className="mt-[2rem]">
              <div className="flex flex-row gap-2 items-center">
                <RxCheckCircled className="text-[22px] text-[#002e72]" />
                <h4 className="font-['Inter'] font-normal text-[18px] text-[#002e72]">
                  {point.title}
                </h4>
              </div>
              <p className="text-[#090914] font-['Inter'] font-normal text-[18px] mt-[1rem] ml-[2rem] ">
                {point.description}
              </p>
            </div>
          ))}

          <p className="text-[#090914] font-['Inter'] font-normal text-[18px] mt-[2rem]">
            We offer scalable solutions to our clients, in collaboration with
            leading impact firms.
          </p>

          <button className="w-[230px] h-[45px] rounded-xl border-[1px] border-[#002e72] text-[#002e72] text-[16px] font-medium font-['Inter'] mt-4">
            Learn About Impactable
          </button>
        </div>

        <div className="lg:w-[50%] md:w-full sm:w-full sx:w-full lg:pl-[3rem] md:px-[5rem] flex items-center justify-center sm:mt-[2rem] md:my-[2rem] xs:my-[2rem] ">
          <img
            src={Image}
            alt="Image"
            className="lg:w-[600px] lg:h-[500px] md:w-[600px] sm:w-[500px] sm:h-[450px] xs:w-[300px] xs:h-[300px] md:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
