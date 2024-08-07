import { useState } from "react"
import { CountriesOption, InputField, RadioSelect, Select } from "../../assets/components/FormInputs"
import { AvailableCourses } from "../../assets/Constants"
import { Headers } from "../../assets/components/Headers"

const TrainingPage = () => {
    const [ formInputs, setFormInputs ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        age: "",
        nationality: "",
        training: ""

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


  return (
    <main className='bg-secondary w-full min-h-screen center py-[15vh]'>
        <div className="w-11/12 lg:w-10/12 xl:w-9/12 center flex-col gap-9 text-zinc-900">
            <div className="w-full my-9">
                <Headers 
                    text="Registration"
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
                    label="Nationality"
                    name="nationality"
                    handleChange={handleChange}
                    type="text"
                    value={formInputs.nationality}
                    isReadonly={true}
                    func={() => setShowCountries(true)}
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
                    label="Training"
                    name="training"
                    handleChange={handleChange}
                    type="text"
                    value={formInputs.training}
                    isReadonly={true}
                    func={() => setShowPopUp("training")}
                >

                    <Select 
                        options={AvailableCourses}
                        showPopUp={showPopUp}
                        setShowPopUp={setShowPopUp}
                        formInputs={formInputs}
                        name={"training"}
                        label={"Training"}
                    
                    />
                
                </InputField>
               


            </form>

            <div className="w-full lg:w-6/12 h-[50vh] bg-primary rounded-3xl sticky top-9 [20vh]"></div>
        </div>


        </div>       
    </main>
  )
}

export default TrainingPage