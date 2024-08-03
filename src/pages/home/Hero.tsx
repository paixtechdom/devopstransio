import { Button } from "../../assets/components/Button"

export const Hero: React.FC = () => {
    return(
        <div className="min-h-[110vh] bg-hero bg-center bg-cover w-full center pb-[10vh] z-6 relative"> 
            <div className="w-11/12 lg:w-10/12 xl:w-9/12 flex flex-col justify-center items-start">
                <div className="w-full lg:w-8/12 flex flex-col justify-center items-start text-white gap-4">
                    <p className="leading-relaxed tracking-wide text-gray-300">
                        Let’s Talk About Automation
                    </p>

                    <h1 className="font-bold text-primary text-4xl lg:text-5xl leading-snug tracking-wide">
                        LET’S LIFT YOUR
                        BUSINESS TO THE CLOUD
                    </h1>


                    <p className="text-lg text-gray-300">
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
            </div>
        </div>
    )
}