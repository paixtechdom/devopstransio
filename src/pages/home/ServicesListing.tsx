import { ServicesList } from "../../assets/Constants"
import { Services } from "../../assets/Interfaces"
import { Headers } from "../../assets/components/Headers"
import { FC } from "react"
import { useDispatch } from "react-redux"
import { setCurrentService } from "../../assets/store/navigation/navigationSlice"
import { Button } from "../../assets/components/Button"
import { Parallax } from "../../assets/components/Parallax"
import { TrimText } from "../../assets/Functions"



export const ServicesListing = () => {
    return(
        <div id="servicesListing" className="w-full center pt-[15vh]">
            <div className="w-11/12 lg:w-10/12 center flex-col  gap-[10vh] ">
                <div className="w-full">
                    <Headers 
                        text="Our Services"
                    />
                </div>


                <div className="xl:w-11/12 flex flex-col gap-y-[10vh] xl:gap-y-[15vh] lg:gap-[20vh]">
                    {
                        ServicesList.map((service: Services, i) => (
                            <ServicesComponent 
                                key={i}
                                title={service.title}
                                desc={service.desc.slice(0, 100)+"..."}
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


interface serviceInterface {
    img: string,
    title: string,
    desc: string,
    index: number
}

const ServicesComponent:FC<serviceInterface> = ({img, title, desc, index}) => {
    const dispatch = useDispatch()

    return(        
        <div 
            onClick={() => 
                dispatch(setCurrentService(index))
            } 
            className={`cursor-pointer flex items-center relative lg:justify-between
            ${index % 2 == 0 ? "lg:flex-row justify-start" : "lg:flex-row-reverse justify-end"} bg- red-500 
        `}>
            <Parallax id={TrimText(title)} type={index % 2 == 0 ? "left" : "right"} className="w-full lg:w-5/12 xl:w-4/12">
                <div className="h-[50vh] lg:h-[45vh] w-full  rounded-2xl overflow-hidden shadow-xl"> 
                    <img src={img} alt={title} className="object-cover h-full w-full"/>
                </div>
            </Parallax>
            <div className={`flex flex-col p-6 rounded-2xl gap-6 shadow-xl w-11/12 lg:w-6/12 absolute lg:relative bg-opacity-40 backdrop-blur-xl
                ${index % 2 == 0 ? "bg-secondary lg:-translate-x-[50%]" : 
                "bg-primary lg:translate-x-[50%]"}
                `}>
                <h2 className="font-bold text-xl">{title}</h2>
                <p>{desc}</p>
                <Button 
                    text="read more"
                    btnType={index % 2 == 0 ? "primary" : "secondary"}
                />
            </div>
            
        </div>
    )

}