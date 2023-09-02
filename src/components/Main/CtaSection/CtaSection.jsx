import { SectionPadding } from "../../../styles"
import { PrimaryButton } from "../../Button"

const CtaSection = () => {
  return (
    <section className={`${SectionPadding}`}>
      <div className="text-center">
        <h1 className="text-[2.5rem] font-semibold md:text-[3rem] mb-12">Level up your <span className="ff-playfair">Workflow</span></h1>
        <PrimaryButton value='View Pricing Plans'/>
      </div>
    </section>
  )
}

export default CtaSection
