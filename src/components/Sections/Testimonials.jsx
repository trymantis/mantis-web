import { P2, P4 } from "../Elements/Texts"

const Testimonials = () => {
  return (
    <section className="flex flex-col xl:flex-row justify-between gap-10 xl:gap-16 mx-7.4 my-16 md:my-40 p-3 lg:p-5 rounded-md md:rounded-lg bg-grey3">
        <div className="flex flex-col justify-between order-2 xl:order-1 py-6 lg:py-12 px-3 lg:px-8 gap-8 xl:w-[454px]">
            <div className="">
                <img src="/ourVision.svg" alt="Logo" className="max-w-28 sm:max-w-32 lg:max-w-40"/>
            </div>
            <div className="flex flex-col gap-6">
                <P2 content="“In a couple years, we see African businesses operating at the speed of software—closing their books in minutes, spotting cash-flow opportunities in real time, and scaling without fear of hidden errors or delays. With Mantis as their financial backbone, teams will spend less time on manual drudgery and more time driving growth, innovation, and impact across the continent. We're thrilled to be building the platform that empowers this transformation—because when finance is seamless, business can be limitless.”" color="text-grey4"/>
                <P4 content="Williams Ozuem, Engineering, Mantis" color="text-grey4" weight="light"/>
            </div>
        </div>
        <div className="order-1 xl:order-2 aspect-square w-full xl:w-[594px] rounded-md md:rounded-lg bg-cream">
            <div></div>
        </div>
    </section>
  )
}

export default Testimonials
