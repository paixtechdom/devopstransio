import { Link } from "react-router-dom"
import { contactInfo, logo, NavInfo, ServicesList } from "../Constants"
import { useDispatch } from "react-redux"
import { setCurrentService } from "../store/navigation/navigationSlice"

export const Footer = () => {
    const dispatch = useDispatch()
    return(
        <section className="bg-primary bg-opacity-50 min-h-[40vh] center py-[15vh]">
            <div className="w-11/12 lg:w-10/12 flex justify-between gap-x-[150px] gap-[10vh]">

                <div className="flex flex-col gap-6">
                    <img src={logo} alt="Cloud Transio Logo" className="h-fit"/>
                    <div className="flex flex-col gap-1">
                        <div className="mb-2 text-xl text-zinc-700 font-bold">Contact Us</div>
                        {
                            contactInfo.map((contact, i ) => (
                                <a target="_blank" key={i} href={`/${contact.link}`} className="text-base">
                                    {contact.title}
                                </a>
                            ))
                        }
                    </div>
                </div>


                <div className="flex flex-col gap-3 ">
                    <div className="mb-3 text-xl text-zinc-700 font-bold">Links</div>
                    {
                        NavInfo.map((nav, i ) => (
                            <Link key={i} to={`/${nav.link}`} className="text-base">
                                {nav.title}
                            </Link>
                        ))
                    }
                </div>


                <div className="flex flex-col gap-3">
                    <div className="mb-3 text-xl text-zinc-700 font-bold">Our Services</div>
                    <div className="grid md:grid-cols- 2 gap-3">

                    {
                        ServicesList.map((service, i ) => (
                            <Link to={"/services"} key={i}  className="text-base cursor-pointer"
                            onClick={() => dispatch(setCurrentService(i))} 
                            >
                                {service.title}
                            </Link>
                        ))
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}