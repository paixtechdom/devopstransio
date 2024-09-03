import { FC } from "react"
import { Parallax } from "./Parallax"
import { TrimText } from "../Functions"

interface ImageTextInterface {
    img1: string,
    img2: string,
    header: string
    desc: string,
    btn: JSX.Element,
    span?: string,
    subHeader?: string
}

// const imageClass = " font - color - navbar ( home services about ) - services on the home page"

export const ImageText:FC<ImageTextInterface> = ({img1, img2, header, desc, btn, span, subHeader}) => {
  return (

    <section className="w-full center my-[15vh] mb-[25vh]">
        <div className="flex flex-col-reverse w-11/12 lg:w-10/12 lg:flex-row justify-between gap-[50px] gap-y-12">
            <div className="w-full lg:w-11/12 relative flex flex-col">
                <Parallax id={TrimText(header)+"img"} type="left">
                    <div className="h-fit lg:h-[35vh] w-9/12 rounded-3xl shadow-lg shadow-primary overflow-hidden">
                        <img src={img1} alt="" className="w-full h-full object-cover"/>
                    </div>
                </Parallax>

                    
                <div className="h-fit lg:h-[35vh] w-9/12 absolute top-[50%] right-0 rounded-3xl shadow-lg shadow-primary overflow-hidden center">
                    <div className="w-full h-full">
                        <img src={img2} alt="" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3 w-full">
                <Parallax id={TrimText(header)} type="right">
                    <h2 className="text-zinc-900 font-bold text-4xl relative">{header} <br />
                        {
                            span && <span className="text-zinc-900">{span}</span>
                        }
                    </h2>
                </Parallax>

                <Parallax id={TrimText(header)+'subHeader'} type="left">
                    <h3 className="font-bold text-xl text-zinc-700">{subHeader}</h3>
                </Parallax>

                <Parallax id={TrimText(header)+'desc'} type="left">
                    <p className="tracking-wide leading-relaxed text-black">{desc}</p>
                </Parallax>
                <Parallax id={TrimText(header)+'btn'}>
                    {btn}
                </Parallax>
            </div>
        </div>
    </section>
  )
}
