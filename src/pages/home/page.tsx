import { WhyUs } from "./WhyUs"
import { Hero } from "./Hero"
import { DevOpsTools } from "./DevOpsTools"
import { Testimonials } from "./Testimonials"
import { PainsDesires } from "./PainsDesires"
// import { BlogListing } from "../blogs/BlogListing"
import { Helmet } from "react-helmet-async"
// import eight from "../../assets/images/eight.jpg"
// import stress from "../../assets/images/stress.jpg"
import { ServicesListing } from "./ServicesListing"
import { AService } from "../Service/AService"



const HomePage: React.FC = () => {


    return(
        <>
            <Helmet>
                <title>Cloud Transio</title>
                <meta name="description" content="" />
            </Helmet>
            <main className="center flex-col relative text-black">
                               
                <Hero />

                <WhyUs />    
                
                <ServicesListing />

                <div className="flex flex-col bg-secondary bg-opacity-50 mt-[15vh]">

                <DevOpsTools />

                <PainsDesires />
                </div>

                <Testimonials />
                
            </main>

            <AService />            
        </>
    )
}


export default HomePage