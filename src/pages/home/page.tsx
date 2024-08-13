import { Button } from "../../assets/components/Button"
import { ImageText } from "../../assets/components/ImageText"
import { AfterHero } from "./AfterHero"
import { Hero } from "./Hero"
import { DevOpsTools } from "./DevOpsTools"
import { Testimonials } from "./Testimonials"
import img1 from "../../assets/images/server.jpg"
import img2 from "../../assets/images/img2.jpg"
import { Headers } from "../../assets/components/Headers"
import { Blogs, ServicesList } from "../../assets/Constants"
import { Services } from "../../assets/Interfaces"
import { Link } from "react-router-dom"
import { PainsDesires } from "./PainsDesires"
import { BlogListing } from "../blogs/BlogListing"


const HomePage: React.FC = () => {


    return(
        <div className="center bg-secondary flex-col relative text-black">
            {/* <>
            <div className="fixed w-full flex justify-end h-[70vh] bottom-[35vh] z-1">

                <div className="bg-black border border-primary border-opacity-20 bg-opacity-10 w-4/12 h-full -rotate-12 translate-x-48 rounded-l-full animate-pulse"></div>
            </div>

            <div className="fixed w-full flex h-[20vh] bottom-[5vh] z-1">

                <div className="bg-black border border-primary border-opacity-20 bg-opacity-40 w-2/12 h-full -rotate-12 -translate-x-40 rounded-r-full animate-pulse"></div>
            </div>

            </> */}
            <Hero />
            
            {/* 
                Images:

                A dynamic image of a cloud infrastructure with interconnected nodes representing cloud migration and DevOps integration.
                A close-up shot of a developer’s hands typing code on a laptop, symbolizing CI/CD automation and continuous improvement.
            */}
            <ImageText 
                img1={img1}
                img2={img2}
                header="Empowering Your Digital"
                span="Transformation"
                desc="At Cloud Transio, we drive your business forward with advanced DevOps practices, CI/CD automation, and secure, scalable cloud solutions. From seamless cloud migrations to 24/7 server monitoring, we optimize your digital infrastructure, empowering your journey to digital excellence."
                btn={
                    <Link to={"/contact"}> 
                        <Button 
                            text="CTA Button"
                            btnType="primary"
                        />
                    </Link>
                }
            />

            <AfterHero />

            <section className="w-full center mt-[20vh]">
            <div className="w-11/12 lg:w-10/12 center flex-col  gap-[10vh] ">
                <div className="flex flex-col-reverse w-full lg:flex-row justify-between gap-[50px] gap-y-12 items-center">
                    <div className="flex flex-col gap-7 w-full">
                        <div className="w-full">
                            <Headers 
                                text="Our Services"
                            />
                        </div>
                        <div className="gap-3 grid md:grid-cols-2">
                            {
                                ServicesList.map((service: Services, i) => (
                                    <div key={i} className="flex items-start gap-1">
                                        <div className="size-3 bg-primary rounded-full mt-2">
                                        </div>
                                        <p>
                                            {service.title}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                        
                        <Link to={"/services"}>
                            <Button
                                text="view All"
                                btnType="primary"
                            />
                        </Link>

                        
                    </div>
                    <div className="w-full lg:w-11/12 relative flex flex-col b g-red-900">
                        <div className="rounded-3xl shadow-lg shadow-primary overflow-hidden">
                            <img src={img1} alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>

                </div>
                </div>

            </section>

            <DevOpsTools />

            <ImageText 
                img1={img1}
                img2={img2}
                header='Want to transit from'
                span='"NON-IT" to "IT"?'
                desc="Join our free training on DevOps and Cloud Engineering. We also offer training on Web Development. Cloud Transio offers access to online communities, webinars, blogs, and forums to help you stay updated with the latest trends and developments in cloud and DevOps."
                btn={
                    <Link to={"/courses"}> 
                        <Button 
                            text="Start now"
                            btnType="primary"
                        />
                    </Link>
                }
            />

            <PainsDesires />


            <Testimonials />


            <section className="w-full center my-[20vh]">
                <div className="justify-between w-11/12 lg:w-10/12 center flex-col  gap-[10vh] gap-y-12 items-center">
                
                        
                    <div className="w-full">
                        <Headers 
                            text="Inspiring Articles"
                        />
                    </div>       

                    <BlogListing 
                        blogs={Blogs.filter((a, i) => i < 3 && a)}
                    />
                    <Link to="/blogs" className="w-full">
                        <Button
                            text={"view all"}
                            btnType="primary"
                        />
                    </Link>

                </div>
            </section>

                        
            {/* <p>ASIDE n </p> */}


        </div>
    )
}


export default HomePage