import { newsData } from "../../reusableFunction";

const NewsPage = () => {
  return (
    <div className="w-screen max-w-[1580px] flex flex-col items-center">
      <div className="w-full mt-[6rem]">
        <h1 className="text-[#002e72] font-['Lato'] lg:text-[40px] md:text-[30px] sm:text-[24px] xs:text-[22px] font-bold ml-[6rem]">
          Our Latest Insights
        </h1>
      </div>

      <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-10 mt-6 lg:mx-[6rem] sm:mx-[3rem] xs:mx-[2rem] md:mx-[3rem]">
        {newsData.map((news, index) => (
          <div key={index} className="flex flex-col gap-2 mt-[1rem]">
            <img
              src={news.image}
              alt={`News Image ${index + 1}`}
              className="w-full h-[250px] rounded-lg shadow-md"
            />
            <h2 className="text-[#0764bf] text-[18px] font-semibold">
              {news.category}
            </h2>
            <h1 className="text-[#222] lg:max-w-[405px] font-['Inter'] lg:text-[24px] md:text-[24px] sm:text-[20px] xs:text-[18px] font-semibold">
              {news.title}
            </h1>
          </div>
        ))}
      </div>
      <button className="font-['Inter] w-[175px] h-[45px] lg:text-[16px] md:text-[16px] sm:text-[16px] xs:text-[14px] font-medium my-[4rem] border-[#003c73] text-[#003c73] border-[1px] rounded-xl">
        See all Insights
      </button>
    </div>
  );
};

export default NewsPage;
