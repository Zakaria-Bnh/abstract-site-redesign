import { abstractProductFeatures } from "../../../constants"


const CollabFlow = () => {
  return (
    <section className="pt-14 md:pt-18">
      <h1 className="text-[2rem] md:text-[2.5rem] md:text-[3rem] md:max-w-[70%] mb-6">Design collaboration shouldn’t be extra work</h1>
      <div className="flex gap-6 flex-col md:flex-row">
        {abstractProductFeatures.map(feature => (
          <div key={feature.title}>
            <img src={feature.svg} alt="icon" className="w-[3rem] aspect-square mb-3" />
            <h1 className="font-semibold leading-[24px] mb-3">{feature.title}</h1>
            <p>{feature.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CollabFlow
