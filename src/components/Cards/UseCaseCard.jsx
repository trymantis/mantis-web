import { H6,P2 } from "../Elements/Texts"

const UseCaseCard = ({h6Content, p2Content}) => {
  return (
    <div className="flex flex-col gap-7 lg:gap-9 w-full lg:w-[30rem] shrink-0">
      <div className="rounded-md md:rounded-lg bg-grey3 w-full aspect-[4/5]"></div>
      <div className="flex flex-col gap-2 lg:gap-4">
        <H6 content={h6Content} />
        <P2 content={p2Content} />
      </div>
    </div>
  )
}

export default UseCaseCard
