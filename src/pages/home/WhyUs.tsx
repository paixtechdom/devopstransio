import { Parallax } from "../../assets/components/Parallax"
import { whyWeStandOut } from "../../assets/Constants"
import { TrimText } from "../../assets/Functions"


export const WhyUs : React.FC =  () => {
    return(
        <div className="w-full center my-[10vh]">
            <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row rounded-2xl items-stretch bg-primary bg-opacity-50 p-6 md:p-8 lg:p-12 gap-y-9 gap-3 text-white shadow-xl">
                {
                    whyWeStandOut.map((why :any, i) => (
                        <Parallax key={i} id={TrimText(why.title)} 
                            type={
                                i== 0 ? "left" :
                                i== 1 ? "right" :
                                ""

                            }
                            className="w-full h-full lg:h-[47vh]">
                            <div className="w-full flex flex-col gap-1 bg-secondary shadow-xl border border-primary border-opacity-90 rounded-xl p-5 relative py-8 h-full">
                                <div className="absolute top-5 right-5 rounded-full size-4 bg-primary border border-primary"></div>
                                <div className="size-[20vh] rounded-full center overflow-hidden shadow-3xl">
                                    <img src={why.img} alt={`${why.title}`} className="h-full object-cover" />
                                </div>

                                <h3 className="mt-4 font-bold text-primary">{why.title}</h3>
                                <p className="text-zinc-900">{why.desc}</p>
                            </div>
                        </Parallax>
                    ))
                }
            </div>
        </div>
    )
}