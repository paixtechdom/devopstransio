import { Button } from "../../assets/components/Button"
import img from "../../assets/images/hero.jpg"
import { Headers } from "../../assets/components/Headers"
import { ImageText } from "../../assets/components/ImageText"
import hero from "../../assets/images/hero.jpg"
import reality from "../../assets/images/reality.jpg"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { Parallax } from "../../assets/components/Parallax"
import { TrimText } from "../../assets/Functions"


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
    <>
        <Helmet>
            <title>About | Cloud Transio</title>
            <meta name="description" content="" />
        </Helmet>
        <main className='w-full min-h-screen center flex-col py-[10vh] pt-[15vh] lg:pt-[20vh]'>
            <div className="w-11/12 lg:w-10/12 flex flex-col gap-9 text-white">

                <div className="flex min-h-[70vh] flex-col gap-4 w-full lg:w-9/12">
                    <Headers 
                        text="About Cloud Transio"
                    />
                    <Parallax id={"aboutHeroUpperText"} type="left">
                        <p className="leading-relaxed tracking-wide text-black">
                            Cloud Transio was conceived from a simple yet powerful idea: to make technology work better for businesses by simplifying complex processes. We saw the challenges companies faced with deployment, security, and server management and wanted to provide a solution that not only addressed these issues but also empowered businesses to grow and innovate.
                        </p>
                    </Parallax>
                    <Parallax id={"aboutHeroLowerText"} type="right">
                        <p className="leading-relaxed tracking-wide text-black">
                        We aim to revolutionize the tech world by offering services that enhance efficiency, security, and reliability. By automating key processes and integrating cutting-edge practices, we help businesses achieve their goals faster and more effectively. Our mission is to be the trusted partner for companies navigating the ever-evolving tech landscape, providing the tools and support they need to succeed.
                        </p>
                    </Parallax>

                    <Parallax id={"aboutHeroButtons"}>
                        <div className="flex items-center gap-4 mt-4">
                            <div onClick={() => document.querySelector("#whyus")?.scrollIntoView({
                                behavior: "smooth"
                            })}>
                                <Button 
                                    text={"Read more"}
                                    btnType="primary"
                                />
                            </div>

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

            <div id="whyus" className="w-full bg-secondary bg-opacity-40 border-y border-primary border-opacity-60 backdrop-blur-2xl min-h-[70vh] center py-[15vh] my-[10vh]">
                <div className="w-11/12 lg:w-10/12 flex items-center flex-col xl:flex-row gap-9 text-white">

                    <div className="flex flex-col gap-4 w-full xl:w-6/12">
                        {/* <h2 className="text-3xl font-bold uppercase"></h2> */}
                        <Headers 
                            text="Why choose us?"
                            bg="primary"
                        />
                        <Parallax id="whydesc">
                            <p className="text-black leading-relaxed tracking-wide">Our services stand out because we combine expert knowledge with a focus on automation and security.</p>
                        </Parallax>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 w-full">
                        {
                            whyUsInfo.map((why, i) => (
                                <Parallax key={i} id={TrimText(why.title)} type={
                                    i % 2 == 0 ? "left" : "right"
                                }>
                                    <div className="flex p-7 shadow-xl rounded-xl lg:min-h-[25vh] bg-primary g-opacity-70 gap-3 items-start relative">

                                        <div className="absolute top-5 right-5 rounded-full size-4 bg-zinc-900"></div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="font-bold text-zinc-900 text-xl">
                                                {why.title}
                                            </h3>
                                            <p className="text-black">{why.desc}</p>
                                        </div>
                                    </div>
                                </Parallax>
                            ))
                        }
                    </div>
                </div>
            </div>
            


                <ImageText 
                    header="Understanding Your Challenges,"
                    span="Delivering Solutions"
                    img1={hero}
                    img2={reality}
                    desc="At Cloud Transio, we understand the challenges you face—downtime, security risks, and the need for efficient, cost-effective operations. We’re here to meet your needs for a reliable online presence, fast deployment, and scalable solutions, all while ensuring enhanced security and minimizing costs."
                    /*
                        Images:

                        Image 1: A visual representation of a secure, stable devOpsTeam environment.
                        Image 2: A depiction of a fast and efficient deployment process with a focus on security.
                    */
                    btn={
                        <Link to="/services">
                            <Button 
                                text="Discover more"
                                btnType="primary"
                            />
                        </Link>
                    }
                />

        </main>
    </>
  )
}

export default AboutPage