import { useEffect, useState } from "react"
import { Headers } from "../../assets/components/Headers"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { Parallax } from "../../assets/components/Parallax"

let reviews = [
    {
        name: "Onido Innocent",
        review: "The CI/CD automation transformed our workflow. We can now deploy updates faster and more reliably. The team’s support was outstanding throughout the process!"
    },
    {
        name: "Sarah Bamidele",
        review: "With DevSecOps, our software security is tighter than ever. The continuous checks have significantly reduced our vulnerabilities. Excellent service!"
    },
    {
        name: "Emma L.",
        review: "Migrating to the cloud was seamless with their help. We’ve saved money on hardware, and our team can work from anywhere. Couldn’t be happier!"
    },
    {
        name: "Darlington Daniels",
        review: "24/7 server monitoring has been a game-changer. Our site is always up, and any issues are resolved swiftly. It’s great to have peace of mind knowing experts are watching over our servers."
    },
    {
        name: "Smith Umweni",
        review: "Our infrastructure is now fault-tolerant, and it’s amazing. No more worries about server failures affecting our business. The team did a fantastic job!"
    },
    {
        name: "Michael Rebecca",
        review: "The DevOps and CI/CD practices they introduced improved our collaboration and productivity. We release new features faster and with more confidence."
    },
    {
        name: "Simisoluwa Otujo",
        review: "Load and stress testing identified performance issues we didn’t know existed. Their recommendations helped us optimize our site, and it’s performing better than ever!"
    },
]

export const Testimonials = () => {
    const [ currentReview, setCurrentReview ] = useState(0)
    useEffect(() => {

        if(currentReview == reviews.length - 1){
            reviews.forEach(a => {
                reviews = [...reviews, a]
            })
        }

        const slideInterval = setInterval(() => {
            slide()
        }, 4000)

        return () => clearInterval(slideInterval)
    }, [currentReview])


    const slide = () => {
        setCurrentReview(prev => prev == reviews.length - 1 ? 0 : prev + 1)
    }

    const prevSlide = () => {
        setCurrentReview(prev => prev == 0 ? reviews.length - 1 : prev - 1)
    }


    return(
        <main className="w-full bg-primary min-h-[70vh] center flex-col py-[10vh] mt-[ 15vh]">
            <div className="w-11/12 lg:w-9/12  flex items-center flex-col gap-9 text-black">

                <div className="flex flex-col gap-2 w-full">
                    <Headers 
                        text="Testimonials"
                        // bg="primary"
                    />
                    
                    <Parallax id={"testimonialsheading"} type="right">
                        <p className="text-zinc-900 leading-relaxed tracking-wide">What people say about us</p>
                    </Parallax>
                </div>
            </div>
                
            <div className="flex flex-col w-full py-9">

                <div className="flex gap-6 w-full">
                    <div className={`flex justify-between start transition-all duration-1000`}
                    style={{
                        width: `${currentReview*100}vw`,
                        transform: `translateX(${-currentReview*100}vw)`
                    }}>

                        {reviews.map((review, i) =>(                                    
                            <div key={i} className={`transition-all duration-1000 w-screen center`}>
                                <div className="flex w-screen gap-3 center">
                                    <div className="w-full center">

                                    <div className="flex w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12 gap-3 items-start bg-secondary bg-opacity-50 shadow-xl rounded-2xl p-7 py-12 min-h-[30vh]">

                                        <div className="flex flex-col gap-3">
                                            <h3 className="font-bold text-black text-xl">
                                                {review.name}
                                            </h3>
                                            <p className="leading-relaxed tracking-wide text-zinc-900">{review.review}</p>
                                        </div>

                                    </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>

                <div className="flex center gap-9 mt-9">
                    <Parallax id={"testimonialsbutton"} type="left">
                        <button disabled={currentReview == 0} className={`${arrowClass}`} onClick={() => prevSlide()}>
                            <BiChevronLeft />
                        </button>
                    </Parallax>
                    <Parallax id={"testimonialsbutton"} type="right">
                        <button className={`${arrowClass}`} onClick={() => slide()}>
                            <BiChevronRight />
                        </button>
                    </Parallax>
                </div>
            </div>

            
        </main>
    )
}

const arrowClass = "text-5xl bg-primary rounded-xl border border-secondary p-1 cursor-pointer hover:scale-90 active:scale-90 transition-all duration-500 hover:opacity-60 active:opacity-60 disabled:opacity-60 disabled:scale-90"