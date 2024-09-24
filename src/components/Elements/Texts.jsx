const H1 = ({content}) => {
    return (
        <h1 className="font-bag text-center tracking-tight text-5xl md:text-8xl text-gwhite leading-tight md:leading-tight">
            Reconcile your books <span className="text-lemon">3x</span> faster
        </h1>
  )
}

const H2 = ({content}) => {
    return (
        <h1 className="font-bag tracking-tight text-3xl md:text-6xl lg:text-7xl text-black leading-tight md:leading-tight w-full lg:w-[44rem]">
            {content}
        </h1>
    )
}

const H3 = ({content, color, align}) => {
    return (
      <h2 className={`font-bag text-${align} tracking-tight text-3xl md:text-5xl text-${color} w-[22rem] md:w-full lg:w-[48rem]`}>
            {content}
      </h2>
    )
}

const H4 = ({content}) => {
    return (
      <h4 className="font-SF font-normal text-lg md:text-[2rem] text-black">
        {content}
      </h4>
    )
}

const H6 = ({content}) => {
    return (
      <h4 className="font-SF font-normal text-lg md:text-xl text-black leading-tight md:leading-tight">
        {content}
      </h4>
    )
}

const P1 = ({content, color}) => {
    return (
        <p className={`font-SF font-light text-center text-base md:text-xl ${color} leading-normal md:leading-relaxed tracking-wide`}>
            {content}
        </p>
    )
}

const P2 = ({content, color}) => {
    return (
        <p className={`font-SF font-light ${color} text-base md:text-lg leading-normal md:leading-relaxed`}>
            {content}
        </p>
    )
}

const P3 = ({content, color}) => {
    return (
        <p className={`font-SF font-light ${color} text-base md:text-xl tracking-wide leading-normal md:leading-relaxed`}>
            {content}
        </p>
    )
}


const P4 = ({content, color, weight}) => {
    return (
      <p className={`font-SF font-${weight} ${color} text-sm leading-normal md:leading-relaxed`}>
            {content}
      </p>
    )
}

export {
    H1,
    H2,
    H3,
    H4,
    H6,
    P1,
    P2,
    P3,
    P4
}
