import { useState } from "react"
import { InputField } from "../../assets/components/FormInputs"
import { Headers } from "../../assets/components/Headers"
import { Button } from "../../assets/components/Button"

const ContactPage = () => {
    const [ formInputs, setFormInputs ] = useState({
        fullName: "",
        email: "",
        message: ""
    })

    const handleChange = (e: any) => {
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        })
    }


  return (
    <main className='bg-secondary w-full min-h-screen center py-[15vh]'>
        <div className="w-11/12 lg:w-10/12 xl:w-9/12 center flex-col gap-9 text-white">
        <div className="w-full mb-9">

            <Headers 
                text="Contact Us"
            />
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-[50px] gap-x-[150px] relative">

            <form className="flex flex-col gap-6 w-full bg-primary px-7 md:px-9 p-9 rounded-2xl py-[10vh]">

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

                <div className={`flex flex-col w-full gap-2 relative`}>
                    <label htmlFor={"Message"} className={`${formInputs.message !== "" ? "text-tertiary" : "text-zinc-900"} text-sm font-bold`}>
                        Message                       
                    </label>

                    <div className={`flex rounded-3xl w-full items-center relative ${formInputs.message !== "" ? "" : "text-zinc-900"}  cursor-pointer overflow-hidden min-h-[20vh] h-[20vh] bg-secondary bg-opacity-30 shadow-2xl`}>
                        <textarea 
                            onChange={handleChange}
                            name={'message'}
                            required
                            value={formInputs.message}                            
                            className={`bg-transparent border-none w-full h-full outline-none px-3 text-black`}
                        ></textarea>
                    </div>
                </div>

                <div className="mt-5">
                    <Button 
                        text="Send message"
                        btnType="secondary"
                    />
                </div>
            </form>

            <div className="w-full lg:w-6/12 h-[50vh] bg-tertiary top-[20vh] sticky"></div>
        </div>


        </div>       
    </main>
  )
}

export default ContactPage