import { Button } from "../../assets/components/Button"
import { ImageText } from "../../assets/components/ImageText"
import { WhyUs } from "./WhyUs"
import { Hero } from "./Hero"
import { DevOpsTools } from "./DevOpsTools"
import { Testimonials } from "./Testimonials"
import { Headers } from "../../assets/components/Headers"
import { Blogs, ServicesList } from "../../assets/Constants"
import { Services } from "../../assets/Interfaces"
import { Link } from "react-router-dom"
import { PainsDesires } from "./PainsDesires"
import { BlogListing } from "../blogs/BlogListing"
import { Helmet } from "react-helmet-async"
import { Parallax } from "../../assets/components/Parallax"
import { TrimText } from "../../assets/Functions"
import eight from "../../assets/images/eight.jpg"
import stress from "../../assets/images/stress.jpg"
import programmer from "../../assets/images/programmer.jpg"
import programmer2 from "../../assets/images/programmer2.jpg"
import three from "../../assets/images/three.jpg"


const HomePage: React.FC = () => {


    return(
        <>
            <Helmet>
                <title>Cloud Transio</title>
                <meta name="description" content="" />
            </Helmet>
            <main className="center bg-secondary flex-col relative text-black">
                
                <Hero />
                
                {/* 
                    Images:

                    A dynamic image of a cloud infrastructure with interconnected nodes representing cloud migration and DevOps integration.
                    A close-up shot of a developer’s hands typing code on a laptop, symbolizing CI/CD automation and continuous improvement.
                */}
                <ImageText 
                    img1={eight}
                    header="Empowering Your Digital"
                    span="Transformation"
                    desc="At Cloud Transio, we drive your business forward with advanced DevOps practices, CI/CD automation, and secure, scalable cloud solutions. From seamless cloud migrations to 24/7 server monitoring, we optimize your digital infrastructure, empowering your journey to digital excellence."
                    img2={stress}
                    btn={
                        <Link to={"/contact"}> 
                            <Button 
                                text="CTA Button"
                                btnType="primary"
                            />
                        </Link>
                    }
                />

                <WhyUs />

                <section className="w-full center mt-[20vh]">
                <div className="w-11/12 lg:w-10/12 center flex-col  gap-[10vh] ">
                    <div className="flex flex-col-reverse w-full lg:flex-row justify-between gap-[50px] gap-y-12 items-center">
                        <div className="flex flex-col gap-7 w-full">
                            <Headers 
                                text="Our Services"
                            />
                           
                            <div className="gap-3 grid md:grid-cols-2">
                                {
                                    ServicesList.map((service: Services, i) => (
                                        <Parallax key={i} id={TrimText(service.title)} 
                                        type={
                                            i %2 == 0 ? "right" : "left"
                                        }>
                                            <div className="flex items-start gap-1">
                                                <div className="size-3 bg-primary rounded-full mt-2">
                                                </div>
                                                <p>
                                                    {service.title}
                                                </p>
                                            </div>
                                        </Parallax>
                                    ))
                                }
                            </div>
                            <Parallax id="homeServicesListingBtn">

                                <Link to={"/services"}>
                                    <Button
                                        text="view All"
                                        btnType="primary"
                                        />
                                </Link>
                            </Parallax>

                            
                        </div>
                        <div className="w-full lg:w-11/12 relative ">
                            <Parallax id={"homeServicesListingImg"} type="right">
                                <div className="rounded-3xl shadow-lg shadow-primary overflow-hidden">
                                    <img src={three} alt="" className="w-full h-full object-cover"/>
                                </div>
                            </Parallax>
                        </div>

                    </div>
                    </div>

                </section>

                <DevOpsTools />


                <PainsDesires />

                <ImageText 
                    img1={programmer}
                    img2={programmer2}
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
                
            </main>
        </>
    )
}


export default HomePage