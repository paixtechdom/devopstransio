import { useState } from "react"
import { InputField } from "../../assets/components/FormInputs"

const ContactPage = () => {
    const [ formInputs, setFormInputs ] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (e: any) => {
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        })
    }


  return (
    <main className='bg-secondary w-full min-h-screen center '>
        <div className="w-11/12 lg:w-10/12 xl:w-9/12 center flex-col gap-9 text-white">
        <div className="flex flex-col lg:flex-row w-full gap-[50px] gap-x-[150px] relative">

            <form className="flex flex-col gap-6 w-full">

                <InputField 
                    label="Full Name"
                    name="fullName"
                    handleChange={handleChange}
                    type="text"
                    value={formInputs.fullName}
                />
                <InputField 
                    label="Email Address"
                    name="email"
                    handleChange={handleChange}
                    type="email"
                    value={formInputs.email}
                />
                <InputField 
                    label="Subject"
                    name="subject"
                    handleChange={handleChange}
                    type="text"
                    value={formInputs.subject}
                />

                <div className={`flex flex-col w-full gap-2 relative`}>
                    <label htmlFor={"Message"} className={`${formInputs.message !== "" ? "text-tertiary" : "text-primary"} text-sm font-bold`}>
                        Message                       
                    </label>

                    <div className={`flex rounded-3xl  w-full items-center relative border border-white border-opacity-30 ${formInputs.message !== "" ? "" : " border-white"}  hover:border-white cursor-pointer overflow-hidden min-h-[20vh] h-[20vh]`}>
                        <textarea 
                            onChange={handleChange}
                            name={'message'}
                            required
                            value={formInputs.message}                            
                            className={`bg-transparent border-none w-full outline-none px-3`}
                        ></textarea>
                    </div>
                </div>
            </form>

            <div className="w-full h-[50vh] bg-tertiary top-[20vh] sticky"></div>
        </div>


        </div>       
    </main>
  )
}

export default ContactPage