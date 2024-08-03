import { Button } from '../../assets/components/Button'
import { ServicesListing } from '../home/ServicesListing'
import { AService } from '../Service/AService'

const Services = () => {
  return (
    <>
        <main className='bg-secondary w-full min-h-screen center flex-col py-[10vh] md:pt-[15vh]'>
        <div className="w-11/12 lg:w-10/12 flex flex-col gap-9 text-white">

            <div className="flex min-h-[70vh] flex-col gap-4 w-full lg:w-9/12">
                <h1 className="text-zinc-400 font-bold text-5xl mb-4">
                    Our services at Cloud Transio
                </h1>
                <p className="leading-relaxed tracking-wide text-zinc-200">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nam voluptatem distinctio rerum, fuga, est pariatur tempore ipsum animi earum recusandae voluptate doloribus, eos dolore magnam voluptates sequi illo consequatur.
                </p>
                <p className="leading-relaxed tracking-wide text-zinc-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laboriosam. Labore tenetur eligendi, consequuntur ducimus soluta deleniti animi fuga veniam doloribus dicta et doloremque facilis natus placeat aperiam consequatur necessitatibus sequi quo esse accusantium, nulla ea mollitia recusandae nihil. Tenetur dolorum dolore recusandae vero voluptatibus atque maxime laborum delectus impedit.
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
            

        </div>        <ServicesListing />

        </main>
        
        <AService />            

    </>
  )
}

export default Services