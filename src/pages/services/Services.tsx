import { Link } from 'react-router-dom'
import { Button } from '../../assets/components/Button'
import { Headers } from '../../assets/components/Headers'
import { ImageText } from '../../assets/components/ImageText'
import { ServicesListing } from '../home/ServicesListing'
import { AService } from '../Service/AService'
import img1 from "../../assets/images/server.jpg"
import img2 from "../../assets/images/img2.jpg"
import { Helmet } from 'react-helmet-async'
import { Parallax } from '../../assets/components/Parallax'

const Services = () => {
  return (
    <>
        <Helmet>
            <title>Our Services | Cloud Transio</title>
            <meta name="description" content="" />
        </Helmet>
        <main className='bg-secondary w-full min-h-screen center flex-col py-[10vh] pt-[15vh] lg:pt-[20vh]'>
        <div className="w-11/12 lg:w-10/12 flex flex-col gap-9 text-">

            <div className="flex min-h-[70vh] flex-col gap-4 w-full lg:w-9/12">
                <Headers 
                    text="What we do"
                />
                <Parallax id="servicesHeroUpperText" type="left">
                    <p className="leading-relaxed tracking-wide text-zinc-900">
                    At [DevOps Company Name], we specialize in transforming your operations through cutting-edge DevOps practices. From CI/CD automation that accelerates your deployment processes to robust DevSecOps integrations, 24/7 server monitoring, and cloud migration, we ensure your systems are secure, efficient, and scalable. 
                    </p>
                </Parallax>
                <Parallax id="servicesHeroLowerText" type="right">
                    <p className="leading-relaxed tracking-wide text-zinc-900">
                    Whether you need fault-tolerant infrastructure, load testing, or app modernization, our comprehensive services are designed to optimize performance and keep your business ahead of the curve. Explore our offerings and see how we can elevate your operations to the next level.
                    </p>
                </Parallax>
                <Parallax id="servicesHeroButtons">
                    <div className="flex items-center gap-4 mt-4">

                        <div onClick={() => {
                            document.querySelector("#servicesListing")?.scrollIntoView({
                                behavior: "smooth"
                            })
                        }}>
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

        <ServicesListing />

        <div className="mt-[15vh] lg:mt-[20vh]"></div>

        <ImageText 
            img1={img1}
            img2={img2}
            header='Want to transit from'
            span='"NON-IT" to "IT"?'
            desc="Join our free training on DevOps and Cloud Engineering. We also offer training on Web Development. Cloud Transio offers access to online communities, webinars, blogs, and forums to help you stay updated with the latest trends and developments in cloud and DevOps."
            btn={
                <Link to={"/courses"}> 
                    <Button 
                        text="start now"
                        btnType="primary"
                    />
                </Link>
            }
        />
        </main>
        
        <AService />            

    </>
  )
}

export default Services