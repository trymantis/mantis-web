import { H3, P1} from "../Elements/Texts"
import SecurityCard from "../Cards/SecurityCard"

const Security = () => {
  return (
    <section className="py-10 px-7.4 md:p-7.4 xl:py-32 bg-cream">
        <div className="pb-10 md:pb-20 md:pt-0 flex flex-col items-center gap-5 md:gap-7">
            <H3 content="Your data is in safe hands" color="black" align="center"/>
            <P1 content="Mantis enables accountants, finance professionals and small-business owners" color="black"/>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center self-stretch gap-6 lg:gap-7 xl:gap-6">
            <SecurityCard h6Content="Data Security" p2Content="Your data is handled securely in compliance with NDPR and GPDR standards."/>
            <SecurityCard h6Content="Encrypted at rest and in-transit" p2Content="Your data is handled securely in compliance with NDPR and GPDR standards."/>
            <SecurityCard h6Content="ISO 20012 Compliant" p2Content="Your data is handled securely in compliance with NDPR and GPDR standards."/>
        </div>
    </section>
  )
}

export default Security
