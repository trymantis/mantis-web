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
            <SecurityCard h6Content="End-to-End Encryption" p2Content="All data is encrypted in transit and at rest, with optional customer-managed keys for maximum confidentiality." image="/image7.svg"/>
            <SecurityCard h6Content="Access & Identity Control" p2Content="Role-based permissions, single sign-on, and multi-factor authentication ensure only the right people see your data." image="/image8.svg"/>
            <SecurityCard h6Content="You Own Your Financial Data" p2Content="Choose Mantis-managed cloud or self-host it yourself—always encrypted, always under your control." image="/image9.svg"/>
        </div>
    </section>
  )
}

export default Security
