import { Link } from "react-router-dom"
import { Button } from "../assets/components/Button"
// import img from "../assets/images/four.jpg"

export const PageNotFound = () => {
    return(
        <div className='w-full bg-white center h-[100vh]'>
          <div className="w-11/12 lg:w-10/12 xl:w-9/12 flex flex-col lg:flex-row h-fit gap-6">

            <div className="w-full flex flex-col h-fit gap-6">
              <div className="text-5xl font-bold text-primary">OOPS!</div>
              <p className="">
                It looks like youve reached a page that doesn't exist. <br />
                Click the button below to visit our home page
              </p>

            <Link className='' to='/'>
              <Button 
                text={"Home Page"}
                btnType="primary"
              />
              </Link>
            </div>

          </div>

      </div>
    )
}