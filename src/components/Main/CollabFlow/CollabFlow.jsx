import { abstractProductFeatures } from "../../../constants"
import { SectionPadding } from "../../../styles"


const CollabFlow = () => {
  return (
    <section className={`${SectionPadding} text-white`}>
      <h1 className="ff-playfair font-semibold text-[2.5rem] md:text-[3rem] md:max-w-[70%] mb-6">Design collaboration shouldn’t be extra work</h1>
      <div className="flex gap-8 md:gap-6 flex-col md:flex-row">
        {abstractProductFeatures.map(feature => (
          <div key={feature.title} className="flex-1 bg-blue-100 bg-opacity-10  hover:shadow-xl px-4 py-6 rounded-[1rem]">
            <img src={feature.svg} alt="icon" className="w-[3rem] aspect-square mb-3 " />
            <h1 className="font-semibold leading-[24px] mb-3 text-[1.3rem]">{feature.title}</h1>
            <p>{feature.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CollabFlow
