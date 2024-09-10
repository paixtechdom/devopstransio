import { Link } from "react-router-dom"
import { Button } from "../../assets/components/Button"
import { Parallax } from "../../assets/components/Parallax"
// import hero from "../../assets/images/hero.jpg"



export const Hero: React.FC = () => {
    return(
        <div className="h-screen w-full center z-6 relative md:mt-[5vh] lg:mt-0 bg-heroSm lg:bg-hero bg-ce nter bg-cover bg-no-repeat bg-fixed bg-[50%]"> 

            {/* <div className="absolute top-0 w-full h-full center bg-zinc-700">
                <div className="absolute top-0 h-full w-full bg-black bg-opacity-60 lg:bg-opacity-70"></div>
                <img src={hero} alt="Cloud Infrastructure Image" className="w-full h-full object-cover scale-90"/>

            </div> */}

            <div className="w-full lg:w-10/12 flex justify-center lg:justify-start">

                <div className="w-11/12 xl:w-8/12 justify-center flex flex-col gap-4 p- min-h-screen mb-[10vh]">

                    <Parallax id={"hero"} type="left">
                        <p className="leading-relaxed tracking-wide text-zinc-300">
                            Let’s Talk About Automation
                        </p>
                    </Parallax>
                        
                    <Parallax id={"hero"} type="right">
                        <h1 className="font-bold text-zinc-300 text-5xl">
                            LET’S LIFT YOUR BUSINESS<br />
                            <span className="text-primary">TO THE CLOUD</span>
                        </h1>
                    </Parallax>


                    <Parallax id={"hero"} type="left">
                        <p className="text-lg text-zinc-200">
                        Re-imagining businesses for hyper performance through our Cloud and DevOps Automation technologies to deliver efficiency, innovation, and agility across multiple industries and business verticals.

                        </p>
                    </Parallax>

                    <Parallax id={"hero"}>
                        <Link to="/contact" className="mt-4">
                            <Button
                                text={"Start now"}
                                btnType="gold"
                                baseTextColor="text-gray-300"
                            />
                        </Link>
                    </Parallax>
                    
                </div>

            </div>
        </div>
    )
}
