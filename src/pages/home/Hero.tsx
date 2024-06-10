export const Hero: React.FC = () => {
    return(
        <div className="min-h-screen bg-hero bg-center bg-cover w-full center"> 
            <div className="w-11/12 lg:w-10/12 xl:w-9/12 flex flex-col justify-center items-start">
                <div className="w-full lg:w-7/12 flex flex-col justify-center items-start text-white gap-4">
                    <p className="leading-relaxed tracking-wide">
                        Let’s Talk About Automation
                    </p>

                    <h1 className="font-bold text-primary text-3xl md:text-4xl lg:text-5xl tracking-wide">
                        LET’S LIFT YOUR
                        BUSINESS TO THE CLOUD
                    </h1>


                    <p>
                    Re-imagining businesses for hyper performance through our Cloud and DevOps Automation technologies to deliver efficiency, innovation, and agility across multiple industries and business verticals.

                    </p>
                </div>
            </div>
        </div>
    )
}