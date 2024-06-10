import { Link } from "react-router-dom"
import { servicesOverview } from "../../assets/Constants"
import { Services } from "../../assets/Interfaces"
import { BiChevronRight } from "react-icons/bi"



export const AfterHero : React.FC =  () => {
    return(
        <div className="w-full center -translate-y-[15vh]">
            <div className="w-11/12 lg:w-9/12 flex flex-col lg:flex-row rounded-2xl bg-gray-200 p-12 gap-6">
                {
                    servicesOverview.map((service : Services, i) => (
                        <Link key={i} to={''} className="flex flex-col gap-3">
                            <img src={service.img} alt={`${service.title}`} />

                            <h3 className="font-bold">{service.title}</h3>
                            <p className="ext-sm">{service.desc}</p>

                            <div className="flex items-center text-sm text-secondary font-bold border-b-2 border-primary w-fit">
                                Find out more <span><BiChevronRight className="text-lg text-primary"/></span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}