import { Link } from "react-router-dom"
import { Button } from "../../assets/components/Button"
// import hero1 from "../../assets/images/comboImg.jpg"
// import hero2 from "../../assets/images/stress.jpg"
import hero3 from "../../assets/images/server.jpg"
import { Parallax } from "../../assets/components/Parallax"
// import hero4 from "../../assets/images/img2.jpg"



export const Hero: React.FC = () => {
    return(
        <div className="min-h-[80vh] w-full center z-6 relative mt-[5vh] lg:mt-0"> 
            <div className="w-full lg:w-10/12 flex flex-col lg:flex-row gap-y-[50px] gap-[100px] justify-center items-start">

                <div className="w-full flex justify-start items-start text-gray-800 z-10">
                    <div className="w-full lgw-9/12 xl:w-7/12 justify-center flex flex-col bg-secondary xl:bg-transparent xl:backdrop-blur-none gap-4 bg-opacity-5 backdrop-blur-lg rounded-b-3xl p-9 shadow-none lg:shadow-xl xl:shadow-none min-h-screen">
                        <Parallax id={"hero"} type="left">
                            <p className="leading-relaxed tracking-wide text-gray-900">
                                Let’s Talk About Automation
                            </p>
                        </Parallax>
                            
                        <Parallax id={"hero"} type="right">
                            <h1 className="font-bold text-zinc-800 text-5xl">
                                LET’S LIFT YOUR BUSINESS<br />
                                <span className="text-primary">TO THE CLOUD</span>
                            </h1>
                        </Parallax>

                        <Parallax id={"hero"} type="left">
                            <p className="text-lg text-gray-900">
                            Re-imagining businesses for hyper performance through our Cloud and DevOps Automation technologies to deliver efficiency, innovation, and agility across multiple industries and business verticals.

                            </p>
                        </Parallax>

                        <Parallax id={"hero"}>
                            <div className="flex items-center gap-4 mt-4">
                                <Button 
                                    text={"Read more"}
                                    btnType="primary"
                                />

                                <Link to="/contact">
                                    <Button 
                                        text={"Contact us"}
                                        btnType="secondary"
                                    />
                                </Link>
                            </div>
                        </Parallax>


                        
                    </div>
                </div>

                <div className="absolute left-0 top-0 w-full center min-h-[60vh] scale-[1.3] -rotate-45 translate-x-[30%] -translate-y-[20%]">
                    <Parallax id={"hero"} type="right">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4 items-end">
                                <div className="size-[150px] overflow-hidden rounded-2xl shadow-xl">
                                    <div className="h-full w-full scale-150 bg-secondary lg:bg-primary">
                                        {/* <img src={hero1} alt="Dev ops2" className={`${imgClass} rotate-45`}/> */}

                                    </div>
                                </div>
                                <div className="size-[200px] overflow-hidden rounded-3xl  shadow-xl">
                                    <div className="h-full w-full scale-150 bg-primary">
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="size-[250px] overflow-hidden rounded-2xl  shadow-xl">
                                    <div className="h-full w-full scale-150 bg-secondary">
                                        <img src={hero3} alt="Dev ops2" className={`${imgClass} rotate-45`}/>
                                    </div>
                                </div>
                                <div className="size-[250px] overflow-hidden rounded-3xl  shadow-xl">
                                    <div className="h-full w-full scale-150 bg-primary">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </div>
        </div>
    )
}

const imgClass = "w-full h-full object-cover rotate-4 5"