import { ServicesList } from "../../assets/Constants"
import { Services } from "../../assets/Interfaces"
import { Button } from "../../assets/components/Button"
import img from "../../assets/images/hero.jpg"

export const ServicesComponent = () => {
    return(
        <div className="w-full center mt-[10vh]">
            <div className="w-11/12 lg:w-10/12 xl:w-9/12 center flex-col gap-9">
                <h2 className="text-2xl md:text-4xl text-gray-100">What we do</h2>
                <div className="flex flex-col gap-9 lg:gap-[10vh]">
                    {
                        ServicesList.map((service: Services, i) => (
                            <div key={i} className="flex flex-col lg:flex-row bg-primary p-6 gap-6 rounded-2xl">
                                <img src={img} alt={service.title} className="rounded-xl"/>


                                <div className="flex flex-col gap-3 border-l-0
                                border-t-2 lg:border-l-2  lg:border-t-0 border-zinc-400 pl-0 lg:pl-6 pt-6 px-9">
                                    <h3 className="font-bold">{service.title}</h3>
                                    <p className="text-sm">{service.desc}</p>
                                    <Button text="READ MORE" navigateTo=""/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}