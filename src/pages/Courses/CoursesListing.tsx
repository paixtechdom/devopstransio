import { FC, useState } from "react"
import { Parallax } from "../../assets/components/Parallax"
import { TrimText } from "../../assets/Functions"
import { OtherCourses } from "./CoursesPage"
import { Headers } from "../../assets/components/Headers"
import { Button } from "../../assets/components/Button"

export const  CourseListing:FC<any> = ({setFormInputs, formInputs}) => {
    const [ current_viewed_course, set_current_viewed_course ] = useState(-1)
    return(
        <section className="w-full center py-[15vh] mt-[5vh]">
            <div className="w-11/12 lg:w-10/12 flex flex-col gap-[10vh]">

                <Headers 
                    text={"Our Courses"}
                    bg={"seconadry"}
                />
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-9 items-stretch">

                    {OtherCourses.map((course, i) => (

                        <Parallax key={i} id={TrimText(course.title)} type={i % 3 == 0 ? "left" : i % 2 == 0 ? "" : "right" }>

                            <div className="flex flex-col gap-4 bg-secondary bg-opacity-20 lg:f lex-row rounded-xl overflow-hidden">

                                <img src={course.img} alt={course.title} className="lg:h-[40vh] lg:object-cover rounded-t-lg"/>

                                <div className="flex flex-col gap-2 p-4">

                                    <h3 className="font-bold text-lg">{course.title}</h3>

                                    <p  className={`hidden lg:block`}>

                                        {current_viewed_course == i ? course.desc : course.desc.slice(0, 100) + "..."} 

                                        { current_viewed_course !== i &&
                                            <span className={'font-bold cursor-pointer hidden lg:block'} onClick={() => {
                                                set_current_viewed_course(i)
                                            }}>Read more</span>
                                        }
                                        
                                    </p>

                                    <p className={`lg:hidden`}>
                                        {course.desc}
                                    </p>
                                    
                                    <p className="mt-3"><span className="font-bold">Price: </span>{course.price}</p>

                                    <div className="my-3" onClick={() => {

                                        setFormInputs({
                                            ...formInputs,
                                            course: course.title
                                        })

                                        document.querySelector('#registrationForm')?.scrollIntoView({
                                            behavior: "smooth"
                                        })
                                    }}>
                                        <Button 
                                            text="Start Now"
                                            btnType="primary"
                                        />
                                    </div>

                                </div>

                            </div>

                        </Parallax>

                    ))}

                </div>
            </div>
        </section>
    )
}