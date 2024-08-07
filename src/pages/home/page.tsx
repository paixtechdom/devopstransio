import { Button } from "../../assets/components/Button"
import { ImageText } from "../../assets/components/ImageText"
import { AfterHero } from "./AfterHero"
import { Hero } from "./Hero"
import { Reviews } from "./Reviews"
import img1 from "../../assets/images/hero.jpg"
import img2 from "../../assets/images/hero1.jpg"


const HomePage: React.FC = () => {


    return(
        <div className="center bg-secondary flex-col relative text-white">
            {/* <>
            <div className="fixed w-full flex justify-end h-[70vh] bottom-[35vh] z-1">

                <div className="bg-black border border-primary border-opacity-20 bg-opacity-10 w-4/12 h-full -rotate-12 translate-x-48 rounded-l-full animate-pulse"></div>
            </div>

            <div className="fixed w-full flex h-[20vh] bottom-[5vh] z-1">

                <div className="bg-black border border-primary border-opacity-20 bg-opacity-40 w-2/12 h-full -rotate-12 -translate-x-40 rounded-r-full animate-pulse"></div>
            </div>

            </> */}
            <Hero />
            
            <ImageText 
                img1={img1}
                img2={img2}
                header="Lorem ipsum dolor sit,"
                desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui voluptate deleniti possimus enim libero nihil facilis laudantium quod quae harum animi quos tenetur recusandae, officia omnis placeat dolorum, a veniam sunt necessitatibus ex nam, praesentium commodi voluptates? Modi, voluptatibus cupiditate."
                btn={
                    <Button 
                        text="CTA Button"
                        btnType="primary"
                    />
                }
            />
            <AfterHero />
            <Reviews />
                        

            
            <p>IT - SIWES - PROGRAMMING TRAINING</p>

            <p>ASIDE n </p>
        </div>
    )
}


export default HomePage