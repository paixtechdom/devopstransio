import { ServicesList } from "../../assets/Constants"
import { Services } from "../../assets/Interfaces"
import { Card } from "../../assets/components/Card"
import { Headers } from "../../assets/components/Headers"



export const ServicesListing = () => {
    return(
        <div className="w-full center mt-[10vh]">
            <div className="w-11/12 lg:w-10/12 center flex-col gap-y-9 gap-x-9">
                <div className="w-full">
                    <Headers 
                        text="Our Services"
                    />
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-5 gap-y-[6vh]">
                    {
                        ServicesList.map((service: Services, i) => (
                            <Card 
                                key={i}
                                title={service.title}
                                desc={service.desc.slice(0, 80)+"..."}
                                index={i}
                                img={service.img}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}