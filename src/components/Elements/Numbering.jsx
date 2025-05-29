import { P4 } from "./Texts"

const Numbering = ({content}) => {
  return (
    <div className="flex items-center gap-x-1">
        <div className="w-3 h-3 bg-lemon"></div>
        <P4 content={`${content}`} color="black"/>
    </div>
  )
}

export default Numbering
