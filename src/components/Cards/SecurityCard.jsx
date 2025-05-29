import { H6, P2 } from "../Elements/Texts"

const SecurityCard = ({h6Content, p2Content}) => {
  return (
    <div className="overflow-hidden flex flex-col items-start rounded-lg border border-bgrey">
        <div className="self-stretch h-80 bg-grey2"></div>
        <div className="flex flex-col items-start self-stretch gap-5 bg-white py-10 px-6 md:py-12 md:px-8">
            <H6 content={h6Content}/>
            <P2 content={p2Content} color="tgrey"/>
        </div>
    </div>
  )
}

export default SecurityCard
