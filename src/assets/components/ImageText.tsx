import { FC } from "react"

interface ImageTextInterface {
    img1: string,
    img2: string,
    header: string
    desc: string,
    btn: JSX.Element
}

// const imageClass = " font - color - navbar ( home services about ) - services on the home page"

export const ImageText:FC<ImageTextInterface> = ({img1, img2, header, desc, btn}) => {
  return (

    <section className="w-full center my-9">
        <div className="flex flex-col w-11/12 lg:w-10/12 lg:flex-row justify-between gap-[150px] gap-y-12">
            <div className="w-full lg:w-11/12 relative flex flex-col">
                <img src={img2} alt="" className="absolut e"/>
                <img src={img1} alt="" className="w-full"/>
            </div>

            <div className="flex flex-col gap-3 w-full">
                <h2 className="text-zinc-900 font-bold text-xl">{header}</h2>
                <p className="tracking-wide leading-relaxed text-zinc-700">{desc}</p>

                {btn}
            </div>
        </div>
    </section>
  )
}
