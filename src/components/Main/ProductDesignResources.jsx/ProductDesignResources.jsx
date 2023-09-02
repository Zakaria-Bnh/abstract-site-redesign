import { productDesignSection } from "../../../constants";
import { SectionPadding } from "../../../styles";


const ProductDesignResources = () => {
  return (
    <section className={`${SectionPadding} `}>
      <h1 className="ff-playfair font-semibold mb-8 text-[2.5rem]  md:text-[3rem] text-center">Why design teams love Abstract</h1>
      <div className="flex flex-col md:flex-row gap-8 md:gap-6">
        {productDesignSection.map(resource => (
          <div key={resource.title} className="flex flex-col flex-1 overflow-hidden p-4 bg-[#816a99] bg-opacity-10  hover:shadow-xl px-4 py-6 rounded-[1rem]">
            <div className="flex-1 md:min-h-[70px] ">
              <img src={resource.img} alt="svg demo" className="w-12 mb-3"/>
            </div>
            <h1 className="font-semibold leading-[24px] mb-3 text-[1.3rem] flex-1">{resource.title}</h1>
            <p className=" mb-6">{resource.content}</p>
            <span className="w-[80%] h-[1px] bg-[#816a99] m-auto mb-4"></span>
            <a className="hover:border-b-white w-fit m-auto text-center hover:scale-[103%] duration-300 text-blue-800 hover:text-blue-700 font-semibold" href="#">{resource.link}</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductDesignResources;
