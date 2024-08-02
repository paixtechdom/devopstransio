import { AfterHero } from "./AfterHero"
import { Hero } from "./Hero"
import { ServicesListing } from "./ServicesListing"

const HomePage: React.FC = () => {
    return(
        <div className="center bg-secondary flex-col">
            <Hero />
            <AfterHero />
            <ServicesListing />

            <p>HERO</p>
            <p>AFTER HERO - VALUES - POINTERS - INTRO - WHAT TO EXPECT</p>
            <p>ABOUT US</p>
            <p>SERVICES LISTING</p>
            <p>IT - SIWES - PROGRAMMING TRAINING</p>

            <p>ASIDE n </p>
        </div>
    )
}


export default HomePage