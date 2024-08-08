import { Button } from "../../assets/components/Button"
import { ImageText } from "../../assets/components/ImageText"
import { AfterHero } from "./AfterHero"
import { Hero } from "./Hero"
import { Reviews } from "./Reviews"
import img1 from "../../assets/images/server.jpg"
import img2 from "../../assets/images/img2.jpg"
import { Headers } from "../../assets/components/Headers"
import { ServicesList } from "../../assets/Constants"
import { Services } from "../../assets/Interfaces"
import { Link } from "react-router-dom"
import { DevOpsTools } from "./DevOpsTools"


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
            
            <ImageText 
                img1={img1}
                img2={img2}
                header="Lorem ipsum dolor sit,"
                span="Devops - CI/CD"
                desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui voluptate deleniti possimus enim libero nihil facilis laudantium quod quae harum animi quos tenetur recusandae, officia omnis placeat dolorum, a veniam sunt necessitatibus ex nam, praesentium commodi voluptates? Modi, voluptatibus cupiditate."
                btn={
                    <Button 
                        text="CTA Button"
                        btnType="primary"
                    />
                }
            />


            <AfterHero />

            <div className="w-full center mt-[15vh] lg:mt-[20vh]">
            <div className="w-11/12 lg:w-10/12 center flex-col  gap-[10vh] ">
                <div className="flex flex-col-reverse w-full lg:flex-row justify-between gap-[50px] gap-y-12 items-center">
                    <div className="flex flex-col gap-7 w-full">
                        <div className="w-full">
                            <Headers 
                                text="Our Services"
                            />
                        </div>
                        <div className="gap-3 grid grid-cols-2">
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
                                text="view services"
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

            </div>

            <DevOpsTools />

            <Reviews />
                        

            
            <p>IT - SIWES - PROGRAMMING TRAINING</p>

            <p>ASIDE n </p>
        </div>
    )
}


export default HomePage