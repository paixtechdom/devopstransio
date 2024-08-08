import { Button } from "../../assets/components/Button"
import img from "../../assets/images/hero.jpg"
import { Headers } from "../../assets/components/Headers"
import { ImageText } from "../../assets/components/ImageText"
import server from "../../assets/images/server.jpg"
import benchmark from "../../assets/images/benchmark.jpg"


const whyUsInfo = [
    {
        title: "Personalized Support",
        desc: "We provide tailored solutions that fit your specific needs, ensuring the best outcomes for your business.",
        img: img || "personalizedSupport"
    },
    {
        title: "Continuous Monitoring",
        desc: "Our 24/7 monitoring means you’re always covered, with immediate response to any issues.",
        img: img || "continuousMonitoring"
    },
    {
        title: "Seamless Integration",
        desc: "We make sure our solutions integrate smoothly with your existing systems, minimizing disruption.",
        img: img || "seamlessIntegration"
    },
    {
        title: "Educational Resources",
        desc: "We offer training and upskilling opportunities to help your team stay ahead in the tech world.",
        img: img || "educationalResources"
    },
]


const AboutPage = () => {
  return (
    <main className='bg-secondary w-full min-h-screen center flex-col py-[10vh] pt-[15vh] lg:pt-[20vh]'>
        <div className="w-11/12 lg:w-10/12 flex flex-col gap-9 text-white">

            <div className="flex min-h-[70vh] flex-col gap-4 w-full lg:w-9/12">
                <Headers 
                    text="About Cloud Transio"
                />
                <p className="leading-relaxed tracking-wide text-zinc-900">
                    Cloud Transio was conceived from a simple yet powerful idea: to make technology work better for businesses by simplifying complex processes. We saw the challenges companies faced with deployment, security, and server management and wanted to provide a solution that not only addressed these issues but also empowered businesses to grow and innovate.
                </p>
                <p className="leading-relaxed tracking-wide text-zinc-900">
                We aim to revolutionize the tech world by offering services that enhance efficiency, security, and reliability. By automating key processes and integrating cutting-edge practices, we help businesses achieve their goals faster and more effectively. Our mission is to be the trusted partner for companies navigating the ever-evolving tech landscape, providing the tools and support they need to succeed.
                </p>

                <div className="flex items-center gap-4 mt-4">
                    <Button 
                        text={"Read more"}
                        btnType="primary"
                    />

                    <Button 
                        text={"Contact us"}
                        btnType="secondary"
                    />
                </div>
            </div>
            

        </div>

        <div className="w-full bg-primary bg-opacity-100 border-y border-primary border-opacity-60 backdrop-blur-2xl min-h-[70vh] center py-[15vh] my-[10vh]">
            <div className="w-11/12 lg:w-10/12 flex items-center flex-col xl:flex-row gap-9 text-white">

                <div className="flex flex-col gap-4 w-full xl:w-6/12">
                    {/* <h2 className="text-3xl font-bold uppercase"></h2> */}
                    <Headers 
                        text="Why choose us?"
                        bg="primary"
                    />
                    <p className="text-zinc-900 leading-relaxed tracking-wide">Our services stand out because we combine expert knowledge with a focus on automation and security.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 w-full">
                    {
                        whyUsInfo.map((why, i) => (
                            <div key={i} className="flex p-7 shadow-xl rounded-xl lg:min-h-[25vh] bg-secondary gap-3 items-start relative">

                                <div className="absolute top-5 right-5 rounded-full size-4 bg-primary border border-primary"></div>
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-primary text-xl">
                                        {why.title}
                                    </h3>
                                    <p className="text-zinc-900">{why.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        


            <ImageText 
                header="Desires fulfilled"
                span="Fears swallowed"
                img1={server}
                img2={benchmark}
                desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, vitae alias eum consequuntur corrupti sunt asperiores tempore officia deserunt saepe aliquam magnam quod blanditiis minima error architecto ratione amet suscipit?"
                btn={
                    <Button 
                        text="Start now"
                        btnType="primary"
                    />
                }
            />

    </main>
  )
}

export default AboutPage