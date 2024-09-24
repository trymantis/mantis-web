import { H3, P4 } from "../Elements/Texts"
import { PrimaryBtn, SecondaryBtn } from "../Elements/Buttons"

const Footer = () => {
  return (
    <section className="px-7.4 py-16 md:py-7.4 bg-green">
      <div className="flex flex-col gap-9 pb-10 md:pb-16">
        <H3 content="Try Mantis" color="gwhite" align="left"/>
        <div className="flex flex-col lg:flex-row gap-3.5 lg:gap-6 items-start">
            <PrimaryBtn title="Start Reconciling" />
            <SecondaryBtn title="Share feedback with us" bColor="white" tColor="gwhite"/>
        </div>
      </div>
      <div className="pt-10 md:pt-16 border-t border-gwhite space-y-6 lg:space-y-12 opacity-60">
        <div className="flex gap-6">
            <P4 content="Terms of Use" color="text-grey4" weight="normal"/>
            <P4 content="Privacy Policy" color="text-grey4" weight="normal"/>
            <P4 content="Support" color="text-grey4" weight="normal"/>
        </div>
        <P4 content="© Mantis Technology Limited 2024" color="text-grey4"/>
      </div>
    </section>
  )
}

export default Footer
