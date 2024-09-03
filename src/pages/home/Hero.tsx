import { Link } from "react-router-dom"
import { Button } from "../../assets/components/Button"
import { Parallax } from "../../assets/components/Parallax"




export const Hero: React.FC = () => {
    return(
        <div className="min-h-[110vh] w-full center z-6 relative md:mt-[5vh] lg:mt-0 bg-hero bg-cover bg-no-repeat"> 
            <div className="w-full lg:w-10/12 flex justify-center lg:justify-start">

                <div className="w-11/12 xl:w-8/12 justify-center flex flex-col gap-4 p- min-h-screen mb-[15vh]">

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
                                btnType="primary"
                                baseTextColor="text-gray-300"
                            />
                        </Link>
                    </Parallax>
                    
                </div>

            </div>
        </div>
    )
}
