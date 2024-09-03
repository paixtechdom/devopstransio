import { Parallax } from "../../assets/components/Parallax"
import { whyWeStandOut } from "../../assets/Constants"
import { TrimText } from "../../assets/Functions"


export const WhyUs : React.FC =  () => {
    return(
        <div className="w-full center mb-[10vh] mt-[-30vh] z-10">
            <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row rounded-2xl items-stretch bg-secondary bg-opacity-50 backdrop-blur-3xl p-6 md:p-8 gap-y-9 gap-3 text-white shadow-xl">
                {
                    whyWeStandOut.map((why :any, i) => (
                        <Parallax key={i} id={TrimText(why.title)} 
                            type={
                                i== 0 ? "left" :
                                i== 1 ? "right" :
                                ""

                            }
                            className="w-full h-full xl:h-[47vh]">
                            <div className="w-full flex flex-col gap-1 bg-primary bg-opacity-40 shadow-xl border border-primary border-opacity-90 rounded-xl p-5 relative py-8 h-full">
                                <div className="absolute top-5 right-5 rounded-full size-4 bg-secondary border border-primary"></div>
                                <div className="size-[20vh] rounded-full center overflow-hidden shadow-3xl">
                                    <img src={why.img} alt={`${why.title}`} className="h-full object-cover" />
                                </div>

                                <h3 className="mt-4 font-bold text-zinc-950">{why.title}</h3>
                                <p className="text-black">{why.desc}</p>
                            </div>
                        </Parallax>
                    ))
                }
            </div>
        </div>
    )
}