import { FC } from "react"

interface ImageTextInterface {
    img1: string,
    img2: string,
    header: string
    desc: string,
    btn: JSX.Element,
    span?: string
}

// const imageClass = " font - color - navbar ( home services about ) - services on the home page"

export const ImageText:FC<ImageTextInterface> = ({img1, img2, header, desc, btn, span}) => {
  return (

    <section className="w-full center my-[15vh] mb-[25vh]">
        <div className="flex flex-col-reverse w-11/12 lg:w-10/12 lg:flex-row justify-between gap-[50px] gap-y-12">
            <div className="w-full lg:w-11/12 relative flex flex-col b g-red-900">
                <div className="h-[30vh] w-9/12 rounded-3xl shadow-lg shadow-primary overflow-hidden">
                    <img src={img1} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="h-[30vh] w-9/12 absolute top-[50%] right-0 rounded-3xl shadow-lg shadow-primary overflow-hidden center">
                    <div className="w-full h-full">
                        <img src={img2} alt="" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3 w-full">
                <h2 className="text-zinc-900 font-bold text-4xl">{header} <br />
                    {
                        span && <span className="text-primary">{span}</span>
                    }
                </h2>
                <p className="tracking-wide leading-relaxed text-zinc-700">{desc}</p>

                {btn}
            </div>
        </div>
    </section>
  )
}
