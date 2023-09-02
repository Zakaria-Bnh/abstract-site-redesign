import { abstractAdvantages } from "../../../constants";
import { SectionPadding } from "../../../styles";

const CollabExempares = () => {
  return (
    <section className={`${SectionPadding} text-white`}>
      <h1 className="ff-playfair font-semibold mb-8 text-[2.5rem] md:text-[3rem] text-center">
        Why design teams love️ Abstract
        <span className="text-[1.25rem] align-top leading-[2.25rem]">®</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-6 ">
        {abstractAdvantages.map((card) => (
          <div
            key={card.title}
            className="w-full flex flex-col px-4 py-6 rounded-[1rem] bg-blue-100 bg-opacity-10  hover:shadow-xl"
          >
            <div className="mb-6 flex-1 min-h-[40px] md:min-h-[80px] flex justify-center items-center">
              <img
                className={`${
                  card.title === "Remote collaboration"
                    ? "w-[14rem]"
                    : "w-[6rem]"
                }`}
                src={card.img}
                alt="design team company"
              />
            </div>
            <h1 className="flex-1 font-semibold leading-[24px] mb-3 text-[1.3rem]">
              {card.title}
            </h1>
            <p className="flex-1 mb-6">{card.content}</p>
            <a
              className="w-fit block ml-auto font-semibold hover:scale-[103%] duration-300 text-blue-300 hover:text-blue-200 cursor-pointer"
              href="#"
            >
              {card.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollabExempares;
