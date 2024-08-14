import { Helmet } from "react-helmet-async"
import { Button } from "../../assets/components/Button"

import { Blogs } from "../../assets/Constants"
import { BlogListing } from "./BlogListing"


const BlogsPage = () => {
  return (
    <>
      <Helmet>
          <title>Blogs | Cloud Transio</title>
          <meta name="description" content="" />
      </Helmet>
      <main className="min-h-screen pb-[10vh]">
        <section className="min-h-[60vh] center w-full gap-[50px] pt-[15vh]">
          <div className="flex flex-col w-11/12 lg:w-9/12 gap-5 lg:items-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-zinc-900 w-full lg:w-8/12 lg:text-center">
              Articles, Ideas and <span className="text-primary"> Inspirations for you</span>
            </h1>
            <p className="text-gray-900 w-11/12 lg:w-8/12 lg:text-center">
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


        <section className="w-full center my-[5vh]">
          <div className="justify-between w-11/12 lg:w-10/12 center flex-col  gap-[10vh] gap-y-12 items-center">
            <BlogListing 
                blogs={Blogs}
            />
          </div>
        </section>

      </main>
    </>
  )
}

export default BlogsPage