import { whyWeStandOut } from "../../assets/Constants"
import { Services } from "../../assets/Interfaces"



export const AfterHero : React.FC =  () => {
    return(
        <div className="w-full center -translate-y-[25vh]">
            <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row rounded-2xl bg-secondary bg-opacity-0 backdrop-blur-lg p-5 md:p-8 lg:p-12 gap-y-9 gap-3 text-white border border-primary border-opacity-10">
                {
                    whyWeStandOut.map((why : Services, i) => (
                        <div key={i} className="w-full flex flex-col gap-1 bg-secondary bg-opacity-10 backdrop-blur-xl border border-primary border-opacity-20 rounded-xl p-5 relative py-8">
                            <div className="absolute top-5 right-5 rounded-full size-4 bg-secondary border border-primary"></div>
                            <div className="size-[18vh] rounded-full center overflow-hidden shadow-3xl">
                                <img src={why.img} alt={`${why.title}`} className="h-full object-cover" />
                            </div>

                            <h3 className="mt-4 font-bold text-primary">{why.title}</h3>
                            <p className="text-zinc-300">{why.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}