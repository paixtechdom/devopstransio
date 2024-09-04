import { useState } from "react"
import { Button } from "../../assets/components/Button"
import { Parallax } from "../../assets/components/Parallax"
import { TrimText } from "../../assets/Functions"


const Fears = [
    "Downtime and server failures affecting your business operations.",
    "Security vulnerabilities exposing sensitive data.",
    "Slow, inefficient deployment processes leading to delays.",
    "High costs of maintaining on-premise infrastructure."
]

const Desires = [
    "Reliable, uninterrupted online presence.",
    "Fast and secure deployment of updates.",
    "Efficient, cost-effective operations with the flexibility to scale.",
    "Enhanced security measures integrated into development processes.",
]


/*
    
    1. Words to use
    2. small screen size?a

*/

export const PainsDesires = () => {
    const [ showFears, setShowFears ] = useState(false)


    const toggleDisplay = () => {
        setShowFears(!showFears)
    }


    return(
        <section className="w-full center my-[10vh] md:my-[15vh] mt-[25vh] min-h-[70vh] bg-prim ary bg-opac ity-20">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-10/12 bg-secondary bg-opacity-30 rounded-2xl relative h-full py-0 pb-[5vh] lg:py-[5vh] gap-9 lg:gap-0">

                <div className={`transition-all duration-500 center p-7 absolute lg:w-6/12 top-0 h-full ${
                        showFears ? "right-0" : "right-[50%]"
                    }`}>
                    <div className="bg-primary w-full h-full rounded-xl cursor-pointer"></div>
                </div>


                
                <div className={`flex flex-col gap-5 lg:m-4 p-7 pt-[7vh] lg:pt-7 rounded-t-2xl lg:rounded-t-none z-10 w-full 
                    ${showFears ? "" : "lg:hidden"} bg-primary lg:bg-transparent`}>
                    <Parallax id={"eliminateFear"} className="w-full">
                        <div className={`text-zinc-800 text-2xl capitalize font-bold w-full`}>
                            We eliminate your fears
                        </div>
                    </Parallax>

                    <div className="flex flex-col divide-y-2 divide-zinc-800 lg:divide-primary gap-2">
                        {
                            Fears.map((fear, i) => (
                                <Parallax key={i} id={TrimText(fear)} 
                                type={
                                    i % 2 == 0 ? "right" : "left"
                                }>
                                    <div key={i} className="flex items-start  font-bold text-zinc-800 h-[10vh] pt-5">
                                        <p>{fear}</p>
                                    </div>
                                </Parallax>
                            ))
                        }
                    </div>
                </div>

                <div className={`lg:m-4 rounded-2xl p-7 z-10 cursor-pointer w-full ${showFears ? "hidden lg:flex lg:justify-center lg:items-center" : "hidden"} `} onClick={
                    () => toggleDisplay()}>
                    <Parallax id={"toogleSmooth"}>
                    <div className="flex flex-col">
                            <div className="text-2xl capitalize  text-zinc-800 font-bold mb-4">
                                And ensure your app runs smmothly
                            </div>
                        <Button 
                            text="Read more"
                            btnType="primary"
                            />
                    </div>
                    </Parallax>
                </div>


                <div className={`lg:m-4 rounded-2xl p-7 z-10 w-full cursor-pointer b g-red-500 ${showFears ? "hidden" : "hidden lg:flex lg:justify-cen ter lg:items-center"}`}
                onClick={() => toggleDisplay()}>
                    <Parallax id={"toogleFears"}>
                    <div className="flex flex-col w-full m-3">
                            <div className="text-2xl capitalize text-zinc-800 font-bold mb-4">
                                We eliminate your fears
                            </div>
                        <Button 
                            text="Read more"
                            btnType="primary"
                            />
                    </div>                  
                    </Parallax>
                </div>
                
                <div className={`flex flex-col gap-5 lg:m-4 p-7 z-10 w-full center ${showFears ? "lg:hidden" : ""}`}>
                    <Parallax id={"runsSmoothly"} className="w-full">
                        <div className="text-zinc-800 text-2xl capitalize font-bold w-full">
                            And ensure your app runs smoothly
                        </div>
                    </Parallax>

                    <div className="bg-se condary flex flex-col divide-y-2 divide-primary gap-2">                        
                    {Desires.map((desire, i) => (
                        <Parallax key={i} id={TrimText(desire)} 
                        type={
                            i % 2 == 0 ? "right" : "left"
                        }>
                            <div key={i} className="flex items-start  font-bold text-zinc-800 h-[10vh] pt-5">
                                <p>{desire}</p>
                            </div>
                        </Parallax>
                    ))}
                </div>
                </div>



            </div>
        </section>
    )
}