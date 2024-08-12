import { Link } from 'react-router-dom'
import { Button } from '../../assets/components/Button'
import { Headers } from '../../assets/components/Headers'
import { ImageText } from '../../assets/components/ImageText'
import { ServicesListing } from '../home/ServicesListing'
import { AService } from '../Service/AService'
import img1 from "../../assets/images/server.jpg"
import img2 from "../../assets/images/img2.jpg"

const Services = () => {
  return (
    <>
        <main className='bg-secondary w-full min-h-screen center flex-col py-[10vh] pt-[15vh] lg:pt-[20vh]'>
        <div className="w-11/12 lg:w-10/12 flex flex-col gap-9 text-">

            <div className="flex min-h-[70vh] flex-col gap-4 w-full lg:w-9/12">
                <Headers 
                text="What we do"/>
                <p className="leading-relaxed tracking-wide text-zinc-900">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nam voluptatem distinctio rerum, fuga, est pariatur tempore ipsum animi earum recusandae voluptate doloribus, eos dolore magnam voluptates sequi illo consequatur.
                </p>
                <p className="leading-relaxed tracking-wide text-zinc-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laboriosam. Labore tenetur eligendi, consequuntur ducimus soluta deleniti animi fuga veniam doloribus dicta et doloremque facilis natus placeat aperiam consequatur necessitatibus sequi quo esse accusantium, nulla ea mollitia recusandae nihil. Tenetur dolorum dolore recusandae vero voluptatibus atque maxime laborum delectus impedit.
                </p>

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