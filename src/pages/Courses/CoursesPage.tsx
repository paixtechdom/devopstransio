import { useState } from "react"
import { CountriesOption, InputField, RadioSelect, Select } from "../../assets/components/FormInputs"
import { AvailableCourses } from "../../assets/Constants"
import { Headers } from "../../assets/components/Headers"
import { Button } from "../../assets/components/Button"
import { ImageText } from "../../assets/components/ImageText"
import training from "../../assets/images/training.jpg"
import training2 from "../../assets/images/training2.jpg"
import { BiChevronDown, BiLoaderAlt } from "react-icons/bi"
import { BsExclamationCircleFill } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { setAlertMessage, setAlertType, toggleShowAlert } from "../../assets/store/AlertSlice"
import { Helmet } from "react-helmet-async"
import axios from "axios"
import { Parallax } from "../../assets/components/Parallax"
import { TrimText } from "../../assets/Functions"

const courses = [
    {
        title: "Cloud & DevOps Upskilling",
        body: [
            "Cloud computing and DevOps skills are becoming essential in today's tech landscape. Cloud computing uses remote servers for data storage, management, and processing, offering flexibility, scalability, and cost savings. DevOps combines software development and IT operations to shorten the development lifecycle and deliver high-quality software continuously. Both are critical for modern businesses, making upskilling in these areas highly valuable.",
            "Upskilling in cloud and DevOps can significantly benefit your career. It opens up new job opportunities and can lead to higher salaries, as companies actively seek professionals who can manage cloud infrastructures and implement DevOps practices. Moreover, having these skills means you can contribute to faster development cycles, more reliable systems, and the ability to scale operations seamlessly. As more businesses move to the cloud and adopt DevOps, staying competitive requires keeping up with these technologies and methodologies.",
            "To start your journey, Cloud Transio offers a robust platform for learning these essential skills. You can choose from courses on major cloud providers like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP), each with its own set of services and certifications. Cloud Transio provides engaging and informative courses for all skill levels, from beginners to advanced practitioners. Practical experience is crucial, so the platform includes labs and exercises where you can experiment with free tiers provided by cloud providers to build projects and solidify your understanding.",
            "Certifications are a vital part of validating your skills and making you more attractive to employers. Cloud Transio prepares you for certifications from cloud providers, such as AWS Certified Solutions Architect, Microsoft Certified: Azure Fundamentals, and Google Cloud Certified - Associate Cloud Engineer. These certifications can enhance your credibility and career prospects.",
            "In addition to cloud computing, Cloud Transio offers comprehensive DevOps course. You can start with the fundamental concepts of DevOps, including continuous integration (CI), continuous delivery (CD), and infrastructure as code (IaC). The platform also provides courses on popular DevOps tools like Jenkins, Docker, Kubernetes, Ansible, and Terraform, each playing a role in automating and streamlining different parts of the software development process. Through practical exercises, you can set up CI/CD pipelines and automate tasks to understand the power of DevOps.",
            "DevOps is not just about tools; it’s also about culture. Cloud Transio encourages improving communication and collaboration within your team to create a more cohesive and efficient workflow. Sharing knowledge and best practices is crucial for fostering a collaborative environment.",
            "Continuous learning is key in the ever-evolving tech industry. Cloud Transio offers access to online communities, webinars, blogs, and forums to help you stay updated with the latest trends and developments in cloud and DevOps. By investing in upskilling with Cloud Transio, you're setting yourself up for greater efficiency, more innovation, and better career prospects.",
        ]
    },
    {
        title: "Software Engineering",
        body: [
            "In today’s digital world, software engineering skills are in high demand. Whether you're looking to build visually stunning websites or robust web applications, mastering both frontend and backend technologies is crucial. Our courses are designed to equip you with the skills needed to excel in modern software enginering, covering everything from the basics to advanced techniques.",
            "Learn how to create engaging and responsive user interfaces with HTML, CSS, JavaScript, React, and Next.js. These technologies are the backbone of frontend development, allowing you to design and build websites that not only look great but also provide seamless user experiences. Through our hands-on courses, you'll gain practical knowledge in building dynamic web pages, managing state with React, and optimizing your applications with Next.js for better performance and SEO.",
            "Dive into the world of backend development with our comprehensive courses on Node.js, PHP or Python. These technologies are essential for creating the server-side logic and databases that power your web applications. You'll learn how to manage data, build APIs, and ensure secure and efficient communication between the frontend and backend. With Node.js, PHP or Python, you’ll be able to create dynamic and data-driven websites that meet the demands of modern users.",
            "Our software engineering courses offer a blend of theory and practice, ensuring you understand the underlying principles while gaining hands-on experience. Whether you're a beginner or looking to advance your skills, our structured learning path will guide you through each stage of development, preparing you for a successful career in software engineering."
        ]
    }
]

const CoursesPage = () => {
    const [ loading, setLoading ] = useState(false)
    const [ emptyFieldsError, setEmptyFieldsError ] = useState(false)
    const dispatch = useDispatch()
    const [ formInputs, setFormInputs ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        age: "",
        phoneNumber: "",
        country: "",
        course: ""

    })
    const [ showCountries, setShowCountries ] = useState(false)
    const [ searchInput, setSearchInput ] = useState('')
    const [ showPopUp, setShowPopUp ] = useState("")

    const cleanedInputs = Object.fromEntries(
        Object.entries(formInputs).map(([key, value]) => [key, value.replace(/\s+/g, ' ').trim()])
    );

    const handleChange = (e: any) => {
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value.replace(/\n/g, '<br>')
        })
    }

    const handleSubmit = (e : any) => {
        e.preventDefault()
        setLoading(true)
       
        const isEmpty = Object.values(cleanedInputs).some(value => value === "");
        if (isEmpty) {
            setEmptyFieldsError(true)
            setLoading(false)
            document.querySelector(`form`)?.scrollIntoView({
                behavior: "smooth"
            })         
            dispatch(toggleShowAlert(true))
            dispatch(setAlertMessage("Please, fill out all fields!"))
            dispatch(setAlertType("error"))
            return;
        }
        setEmptyFieldsError(false)
        const subject = 'Important! New Student Registration'
        console.log(cleanedInputs)
        sendContactEmail(subject)        

    }



    const sendContactEmail = (subject:string) => {
        cleanedInputs.subject = subject
        axios.post(`http://localhost:80/api/registrationemail.php`, {
            data: cleanedInputs
          }, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => {
                if(response.data.success == true){
                    dispatch(setAlertType("success"))
                    dispatch(toggleShowAlert(true))
                    dispatch(setAlertMessage("Message sent successfully!"))
                    clearForm()
                
                }else{
                    isError()
                }
            })
            .catch(() => {
                isError()
            });
            setLoading(false)
    }

    const isError = () => {
        dispatch(toggleShowAlert(true))
        dispatch(setAlertMessage("Failed to send message!"))
        dispatch(setAlertType("error"))
    }

    const clearForm = () => {
        setFormInputs({
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            age: "",
            phoneNumber: "",
            country: "",
            course: ""
        })
    }



  return (
    <>  
        <Helmet>
            <title>Courses | Cloud Transio</title>
            <meta name="description" content="" />
        </Helmet>
        <main className='w-full min-h-screen center flex-col pb-[15vh] lg:pt-[10vh]'>


            <ImageText 
                img1={training}
                img2={training2}
                header='Want to transit from'
                span='"NON-IT" to "IT"?'
                subHeader={"Get started now with a course in tech"}
                desc="Join our free course on DevOps and Cloud Engineering. We also offer course on software engineeringt. Cloud Transio offers access to online communities, webinars, blogs, and forums to help you stay updated with the latest trends and developments in cloud and DevOps."
                btn={
                    <div className="flex items-center gap-4 mt-4">

                        <div onClick={() => document.querySelector('#registration')?.scrollIntoView({
                            behavior: "smooth"
                        })}>

                            <Button 
                                text="Start now"
                                btnType="primary"
                            />
                        </div>

                        <div onClick={() => document.querySelector('#coursesintro')?.scrollIntoView({
                            behavior: "smooth"
                        })}>

                            <Button 
                                text="Read more"
                                btnType="secondary"
                            />
                        </div>


                    </div>
                }
            />


            <div id="coursesintro" className="w-11/12 lg:w-10/12 xl:w-9/12 center flex-col gap-[20vh] text-zinc-900 pt-[15vh]">
                {
                    courses.map((course, i) => (
                    <div key={i} className="flex flex-col gap-9 w-full">
                        <Headers 
                            text={course.title}
                        />
                        <div className="flex flex-col gap-5 text-black">
                            {
                                course.body.map((p, i) => (
                                    <Parallax id={TrimText(p)} type={
                                        i % 2 == 0 ? "left" : "right"
                                    }>
                                        <p key={i}>{p}</p>
                                    </Parallax>

                                ))
                            }
                        </div>
                    </div>
                    ))
                }
            </div>

                    
            <div className="w-11/12 lg:w-10/12 xl:w-9/12 center flex-col text-zinc-900 pt-[15vh]">

                <div id="registration" className="w-full py-[15vh]">
                    <Headers 
                        text="Register now"
                    />

                    <div className="flex flex-col gap-3 mt-9 text-zinc-900">
                        <p className=""> REGISTER NOW FOR A PROFESSIONAL COURSE in devops cloud engineering and software engineering</p>
                        <p className="">Also available for siwes and I.T (Industrial Training) students</p>
                    </div>
                </div>


                <div className="flex flex-col lg:flex-row cent er w-full gap-[50px] gap-x-[150px] relative">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full md:w-9/12 lg:w-9/12 xl:w-8/12 bg-secondary bg-opacity-30  px-7 md:px-9 p-9 rounded-2xl py-[5vh]">
                        <InputField 
                            label="First Name"
                            name="firstName"
                            handleChange={handleChange}
                            type="text"
                            value={formInputs.firstName}
                        />
                        <InputField 
                            label="Last Name"
                            name="lastName"
                            handleChange={handleChange}
                            type="text"
                            value={formInputs.lastName}
                        />
                        <RadioSelect 
                            options={["Male", "Female", "Rather Not say"]}
                            formInputs={formInputs}
                            label={"Gender"}
                            name={"gender"}
                            setFormInputs={setFormInputs}
                        />
                        <InputField 
                            label="Age"
                            name="age"
                            handleChange={handleChange}
                            type="string"
                            value={formInputs.age}
                        />
                        <InputField 
                            label="Email Address"
                            name="email"
                            handleChange={handleChange}
                            type="email"
                            value={formInputs.email}
                        />
                        <InputField 
                            label="Phone Number"
                            name="phoneNumber"
                            handleChange={handleChange}
                            type="tel"
                            value={formInputs.phoneNumber}
                        />
                        
                        <InputField 
                            label="Select Country"
                            name="country"
                            handleChange={handleChange}
                            type="text"
                            value={formInputs.country}
                            isReadonly={true}
                            func={() => {
                                setShowPopUp('')
                                setShowCountries(true)
                            }}
                            icon={
                                <BiChevronDown className="text-4xl mr-4"/>
                            }
                        >
                            <CountriesOption 
                                setFormInputs={setFormInputs}
                                setShowCountries={setShowCountries} 
                                showCountries={showCountries}                         
                                searchInput={searchInput}
                                setSearchInput={setSearchInput}
                                formInputs={formInputs}
                            />
                        </InputField>

                        <InputField 
                            label="Select Course"
                            name="course"
                            handleChange={handleChange}
                            type="text"
                            value={formInputs.course}
                            isReadonly={true}
                            func={() => {
                                setShowCountries(false)
                                setShowPopUp("course")
                            }}
                            icon={
                                <BiChevronDown className="text-4xl mr-4"/>
                            }
                        >

                            <Select 
                                options={AvailableCourses}
                                showPopUp={showPopUp}
                                setShowPopUp={setShowPopUp}
                                formInputs={formInputs}
                                name={"course"}
                                label={"Select Course"}
                            
                            />
                        
                        </InputField>

                        {emptyFieldsError ? 
                            <div className="text-red-900 text-lg flex gap-2 items-center col-span-2"><BsExclamationCircleFill /> Please, fill out all fields
                            </div> 
                            : ""
                        }
                    
                        <div className="mt-5" onClick={(e) => !loading && handleSubmit(e)}>
                            <Button 
                                text={loading ? 
                                    <>
                                        <span>Submitting</span>
                                        <BiLoaderAlt className="animate-spin ml-2 text-xl" />
                                    </> 
                                    : <>Submit</>}
                                btnType="primary"
                            />
                        </div>


                    </form>
                </div>

            </div>       
        </main>
    </>
  )
}

export default CoursesPage