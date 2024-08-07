import { Button } from "../../assets/components/Button"
import hero1 from "../../assets/images/comboImg.jpg"
// import hero2 from "../../assets/images/stress.jpg"
import hero3 from "../../assets/images/server.jpg"
// import hero4 from "../../assets/images/img2.jpg"



export const Hero: React.FC = () => {
    return(
        <div className="min-h-[110vh] w-full center z-6 relative mt-[5vh] lg:mt-0"> 
            <div className="w-full lg:w-10/12 flex flex-col lg:flex-row gap-y-[50px] gap-[100px] justify-center items-start">

                <div className="w-full flex flex-col justify-center items-start text-gray-800 gap-4 z-10 bg-secondary rounded-2xl py-[10vh] bg-opacity-5 backdrop-blur-2xl px-5 lg:px-0">
                    <p className="leading-relaxed tracking-wide text-gray-900">
                        Let’s Talk About Automation
                    </p>

                    <h1 className="font-bold text-zinc-800 text-4xl lg:text-5xl leading-snug tracking-wide">
                        LET’S LIFT YOUR BUSINESS<br />
                         <span className="text-primary">TO THE CLOUD</span>
                    </h1>


                    <p className="text-lg text-gray-900">
                    Re-imagining businesses for hyper performance through our Cloud and DevOps Automation technologies to deliver efficiency, innovation, and agility across multiple industries and business verticals.

                    </p>

                    <div className="flex items-center gap-4 mt-4">
                        <Button 
                            text={"View Services"}
                            btnType="primary"
                        />

                        <Button 
                            text={"Contact us"}
                            btnType="secondary"
                        />
                    </div>
                    
                </div>

                <div className="lg:w-1/12 xl:w-full center min-h-[60vh] scale-[1.3] -rotate-45 translate-x-[15%] -translate-y-[50%] ">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4 items-end">
                            <div className="size-[150px] overflow-hidden rounded-2xl shadow-xl">
                                <div className="h-full w-full scale-150 bg-primary">
                                    <img src={hero1} alt="Dev ops2" className={`${imgClass} rotate-45`}/>

                                </div>
                            </div>
                            <div className="size-[200px] overflow-hidden rounded-3xl  shadow-xl">
                                <div className="h-full w-full scale-150 bg-primary">

                                    {/* <img src={hero2} alt="Dev ops2" className={`${imgClass} rotate-45`}/> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="size-[250px] overflow-hidden rounded-2xl  shadow-xl">
                                <div className="h-full w-full scale-150">
                                    <img src={hero3} alt="Dev ops2" className={`${imgClass} rotate-45`}/>
                                </div>
                            </div>
                            <div className="size-[250px] overflow-hidden rounded-3xl  shadow-xl">
                                <div className="h-full w-full scale-150 bg-primary">
                                    {/* <img src={hero3} alt="Dev ops2" className={`${imgClass} rotate-45`}/> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const imgClass = "w-full h-full object-cover rotate-4 5"