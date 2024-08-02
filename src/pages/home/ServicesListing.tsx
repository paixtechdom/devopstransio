import { ServicesList } from "../../assets/Constants"
import { Services } from "../../assets/Interfaces"
import { Card } from "../../assets/components/Card"



export const ServicesListing = () => {
    return(
        <div className="w-full center mt-[10vh]">
            <div className="w-11/12 lg:w-10/12 xl:w-9/12 center flex-col gap-9">
                <h2 className="text-2xl md:text-4xl text-gray-100">Our Services</h2>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-9 gap-y-[10vh]">
                    {
                        ServicesList.map((service: Services, i) => (
                            <Card 
                                key={i}
                                title={service.title}
                                desc={service.desc.slice(0, 100)}
                                link={'/'}
                                img={service.img}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}