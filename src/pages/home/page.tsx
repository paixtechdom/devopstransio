import { AfterHero } from "./AfterHero"
import { Hero } from "./Hero"
import { ServicesComponent } from "./Services"

const HomePage: React.FC = () => {
    return(
        <div className="center bg-secondary flex-col">
            <Hero />
            <AfterHero />
            <ServicesComponent />
        </div>
    )
}


export default HomePage