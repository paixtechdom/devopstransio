import { Link } from "react-router-dom"
import { contactInfo, logo, NavInfo } from "../Constants"
import { useDispatch } from "react-redux"
import { setCurrentService } from "../store/navigation/navigationSlice"
import { Parallax } from "./Parallax"
import { TrimText } from "../Functions"
import { ServicesList } from "../../pages/home/ServicesListing"


export const Footer = () => {
    const dispatch = useDispatch()
    return(
        <section className="bg-zinc-900 b g-opacity-50 min-h-[40vh] center flex-col">
            <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row justify-between gap-x-[150px] gap-[10vh] py-[15vh]">

                <div className="flex flex-col gap-6">
                    <img src={logo} alt="Cloud Transio Logo" className="h-fit w-fit"/>
                    <div className="flex flex-col gap-1">
                        <div className="mb-2 text-xl text-primary font-bold">Contact Us</div>
                        {
                            contactInfo.map((contact, i ) => (
                                <Parallax key={i} id={TrimText(contact.title)} type={
                                    i % 2 == 0 ? "right" : "left"
                                }>
                                    <a target="_blank" href={`/${contact.link}`} className="text-zinc-300">
                                        {contact.title}
                                    </a>
                                </Parallax>
                            ))
                        }
                    </div>
                </div>

                
                <div className="flex flex-col gap-3">
                    <div className="mb-3 text-xl text-primary font-bold">Our Services</div>
                    <div className="grid  gap-3">

                    {
                        ServicesList.map((service, i) => (
                            <Parallax key={i} id={"footerServiceList"} type={
                                i % 2 == 0 ? "right" : "left"
                            }>
                                <Link to={"/services"}  className="text-zinc-300 cursor-pointer"
                                onClick={() => dispatch(setCurrentService(i))} 
                                >
                                    {service.title}
                                </Link>
                            </Parallax>
                        ))
                    }
                    </div>
                </div>


                <div className="flex flex-col gap-3 ">
                    <div className="mb-3 text-xl text-primary font-bold">Links</div>
                    {
                        NavInfo.map((nav, i ) => (
                            <Parallax key={i} id={TrimText(nav.title)} type={
                                i % 2 == 0 ? "right" : "left"
                            }>

                                <Link to={`/${nav.link}`} className="text-zinc-300">
                                    {nav.title}
                                </Link>
                            </Parallax>
                        ))
                    }
                    <Parallax id={"contactus"} type={"left"}>
                        <Link to="/contact" className="text-zinc-300">Contact Us</Link>
                    </Parallax>
                </div>

            </div>

            <div className="center flex-col bg-zinc-900 text-secondary h-[10vh] md:h-[15vh] w-full border-t border-primary">
                <p className="flex gap-1">
                    All rights reserved <span className="text-primary">{new Date().getFullYear()}</span>
                </p>
                <strong className="text-2xl"> &copy; <span className="text-primary">Cloud Transio</span></strong>
            </div>
        </section>
    )
}