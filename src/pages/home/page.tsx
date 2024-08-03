import { AfterHero } from "./AfterHero"
import { Hero } from "./Hero"
import { Reviews } from "./Reviews"

const HomePage: React.FC = () => {


    return(
        <div className="center bg-secondary flex-col relative text-white">
            <>
            <div className="fixed w-full flex justify-end h-[70vh] bottom-[35vh] z-1">

                <div className="bg-black border border-primary border-opacity-20 bg-opacity-10 w-4/12 h-full -rotate-12 translate-x-48 rounded-l-full animate-pulse"></div>
            </div>

            <div className="fixed w-full flex h-[20vh] bottom-[5vh] z-1">

                <div className="bg-black border border-primary border-opacity-20 bg-opacity-40 w-2/12 h-full -rotate-12 -translate-x-40 rounded-r-full animate-pulse"></div>
            </div>

            </>
            <Hero />
            <AfterHero />

            <Reviews />
                        

            
            <p>IT - SIWES - PROGRAMMING TRAINING</p>

            <p>ASIDE n </p>
        </div>
    )
}


export default HomePage