import { Button } from "../../assets/components/Button"
import { Headers } from "../../assets/components/Headers"
import { Blogs } from "../../assets/Constants"
import { BlogListing } from "./BlogListing"


const BlogsPage = () => {
  return (
    <main className="min-h-screen">
      <section className="min-h-[60vh] center w-full gap-[50px] pt-[15vh]">
        <div className="flex flex-col center gap-5 w-full text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-zinc-900 w-full lg:w-9/12">
            Articles, Ideas and <span className="text-primary"> Inspirations for you</span>
          </h1>
          <p className="text-gray-900 w-11/12 lg:w-8/12">
            Discover the latest in web development and other related technological updates through our articles tailored to your needs.
          </p>
          
          <div 
            className="w-ful l"
            onClick={() => {
              document.querySelector("#search")?.scrollIntoView({
                behavior: "smooth"
              })
            }}>
          
            <Button 
              text="read more"
              btnType="primary"
            />
            
          </div>
          
        </div>

      </section>


      <section className="w-full center my-[20vh]">
        <div className="justify-between w-11/12 lg:w-10/12 center flex-col  gap-[10vh] gap-y-12 items-center">

          <div className="w-full">
              <Headers 
                  text="Inspiring Articles"
              />
          </div>       

          <BlogListing 
              blogs={Blogs}
          />
        </div>
      </section>
    </main>
  )
}

export default BlogsPage