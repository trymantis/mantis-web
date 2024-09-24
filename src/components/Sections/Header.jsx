import { PrimaryBtn, SecondaryBtn } from "../Elements/Buttons"
import { H1, P1, P4 } from "../Elements/Texts"

const Header = () => {
  return (
    <section className="flex items-center justify-center bg-green py-24 px-8 mb-16 md:mb-40">
      <div className="flex flex-col items-center justify-center gap-9 md:gap-12 w-full md:w-[48rem]">
        <div className="flex items-center gap-7 md:gap-9 flex-col self-stretch">
            <H1 />
            <P1 content="Mantis enables accountants, finance professionals and small-business owners to quickly and accurately reconcile bank statements and internal accounts." color="text-gwhite"/>
        </div>
        <div className="flex flex-col md:flex-row w-max items-center gap-3.5 md:gap-7">
            <PrimaryBtn title="Start reconciling"/>
            <SecondaryBtn title="Share feedback with us" bColor="white" tColor="gwhite"/>
        </div>
      </div>
    </section>
  )
}

export default Header
