const PrimaryBtn = ({title}) => {
  return (
    <button className="font-SF w-auto text-center text-sm py-3 px-4 rounded bg-lemon text-green">
        {title}
    </button>
  )
}

const SecondaryBtn = ({title, bColor, tColor}) => {
    return (
        <button className={`font-SF w-auto text-center text-sm py-3 px-4 rounded border border-${bColor} text-${tColor}`}>
            {title}
        </button>
    )
}

export {
    PrimaryBtn,
    SecondaryBtn
}
