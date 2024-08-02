import { servicesOverview } from "../../assets/Constants"
import { Services } from "../../assets/Interfaces"



export const AfterHero : React.FC =  () => {
    return(
        <div className="w-full center -translate-y-[15vh]">
            <div className="w-11/12 lg:w-9/12 flex flex-col lg:flex-row rounded-2xl bg-secondary bg-opacity-10 backdrop-blur-xl p-12 gap-3 text-white border border-primary border-opacity-10">
                {
                    servicesOverview.map((service : Services, i) => (
                        <div key={i} className="w-full flex flex-col gap-3 bg-secondary bg-opacity-10 backdrop-blur-xl border border-primary border-opacity-20 rounded-xl p-5 relative">
                            <div className="absolute top-5 right-5 rounded-full size-4 bg-secondary border border-primary"></div>
                            <div className="size-[18vh] rounded-full center overflow-hidden shadow-3xl">
                                <img src={service.img} alt={`${service.title}`} className="h-full object-cover" />
                            </div>

                            <h3 className="font-bold text-primary">{service.title}</h3>
                            <p className="text-zinc-300">{service.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}