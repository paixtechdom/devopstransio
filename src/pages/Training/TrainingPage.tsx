import { useState } from "react"
import { CountriesOption, InputField, RadioSelect, Select } from "../../assets/components/FormInputs"
import { AvailableCourses } from "../../assets/Constants"
import { Headers } from "../../assets/components/Headers"
import { Button } from "../../assets/components/Button"
import { ImageText } from "../../assets/components/ImageText"
import img1 from "../../assets/images/server.jpg"
import img2 from "../../assets/images/img2.jpg"
import { BiChevronDown } from "react-icons/bi"

const TrainingPage = () => {
    const [ formInputs, setFormInputs ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        age: "",
        country: "",
        course: ""

    })
    const [ showCountries, setShowCountries ] = useState(false)
    const [ searchInput, setSearchInput ] = useState('')
    const [ showPopUp, setShowPopUp ] = useState("")

    const handleChange = (e: any) => {
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        })
    }


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
            title: "Web Development",
            body: [
                "Frontend with html, css, javascript, react and next js -  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsam eum aliquam! Repellat deleniti rem dicta ab minima! Eius architecto a beatae quae provident eos asperiores. Accusamus, fugit iusto dolore quo aliquam vitae recusandae numquam nulla dolor, nemo autem adipisci qui commodi itaque? Accusantium ea debitis a commodi, autem quae laborum aperiam, corrupti quia iure incidunt maxime animi omnis quidem.",
                "Backend with Php, sql - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsam eum aliquam! Repellat deleniti rem dicta ab minima! Eius architecto a beatae quae provident eos asperiores. Accusamus, fugit iusto dolore quo aliquam vitae recusandae numquam nulla dolor, nemo autem adipisci qui commodi itaque? Accusantium ea debitis a commodi, autem quae laborum aperiam, corrupti quia iure incidunt maxime animi omnis quidem.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsam eum aliquam! Repellat deleniti rem dicta ab minima! Eius architecto a beatae quae provident eos asperiores. Accusamus, fugit iusto dolore quo aliquam vitae recusandae numquam nulla dolor, nemo autem adipisci qui commodi itaque? Accusantium ea debitis a commodi, autem quae laborum aperiam, corrupti quia iure incidunt maxime animi omnis quidem.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsam eum aliquam! Repellat deleniti rem dicta ab minima! Eius architecto a beatae quae provident eos asperiores. Accusamus, fugit iusto dolore quo aliquam vitae recusandae numquam nulla dolor, nemo autem adipisci qui commodi itaque? Accusantium ea debitis a commodi, autem quae laborum aperiam, corrupti quia iure incidunt maxime animi omnis quidem."
            ]
        }
    ]

  return (
    <main className='bg-secondary w-full min-h-screen center flex-col py-[15vh]'>
        <ImageText 
            img1={img1}
            img2={img2}
            header='Get started now'
            span='with a course in tech'
            desc="Join our free course on DevOps and Cloud Engineering. We also offer course on Web Development. Cloud Transio offers access to online communities, webinars, blogs, and forums to help you stay updated with the latest trends and developments in cloud and DevOps."
            btn={
                <div onClick={() => document.querySelector('#registration')?.scrollIntoView({
                    behavior: "smooth"
                })}>

                    <Button 
                        text="Start now"
                        btnType="primary"
                    />
                </div>
            }
        />



        <div className="w-11/12 lg:w-10/12 xl:w-9/12 center flex-col gap-[20vh] text-zinc-900 pt-[10vh]">


            <div className="flex flex-col gap-9 w-full">
                <Headers 
                    text={courses[0].title}
                />
                <div className="flex flex-col gap-5 text-black">
                    {
                        courses[0].body.map((p, i) => (
                            <p key={i}>{p}</p>

                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col gap-9 w-full">
                <Headers 
                    text={courses[1].title}
                />
                <div className="flex flex-col gap-5 text-black">
                    {
                        courses[1].body.map((p, i) => (
                            <p key={i}>{p}</p>

                        ))
                    }
                </div>
            </div>
        </div>

                
            <div className="w-11/12 lg:w-10/12 center flex-col gap-9 text-zinc-900 pt-[10vh]">

            <div id="registration" className="w-full py-[15vh]">
                <Headers 
                    text="Register now"
                />

                <div className="flex flex-col gap-3 mt-5 text-zinc-900">
                    <p className=""> REGISTER NOW FOR A PROFESSIONAL COURSE in devops cloud engineering and software engineering</p>
                    <p className="">Also available for siwes and I.T (Industrial Training) students</p>
                </div>
            </div>


        <div className="flex flex-col lg:flex-row w-full gap-[50px] gap-x-[150px] relative">
            <form className="flex flex-col gap-6 w-full bg-primary p-9 rounded-2xl py-[10vh]">
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
                        showCountries={showCountries}                         searchInput={searchInput}
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
               
                <div className="mt-5">
                    <Button 
                        text="Submit"
                        btnType="secondary"
                    />
                </div>


            </form>

            <div className="w-full lg:w-6/12 h-[50vh] bg-primary rounded-3xl sticky top-9 [20vh]"></div>
        </div>


        </div>       
    </main>
  )
}

export default TrainingPage