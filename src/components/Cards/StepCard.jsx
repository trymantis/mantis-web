import Numbering from "../Elements/Numbering"
import { H4, P2 } from "../Elements/Texts"

const StepCard = ({numberContent, h4Content, p2Content}) => {
  return (
    <div className="mt-16 md:mt-40 flex flex-col xl:flex-row items-start xl:items-center gap-14 xl:gap-[7.5rem]">
        <div className="flex flex-col items-start gap-5 w-full xl:w-[482px]">
          <div className="flex flex-col items-start gap-[1.125rem]">
            <Numbering content={numberContent}/>
            <H4 content={h4Content}/>
          </div>
          <P2 content={p2Content} color="text-tgrey"/>
        </div>
        <div className="flex flex-auto self-stretch border border-bgrey rounded-md md:rounded-lg bg-grey1 w-full xl:w-[582px] aspect-square">

        </div>
    </div>
  )
}

export default StepCard
