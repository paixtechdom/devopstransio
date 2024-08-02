import { useState } from "react"
import { CountriesOption, InputField, RadioSelect, Select } from "../../assets/components/FormInputs"
import { AvailableCourses } from "../../assets/Constants"

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
    <main className='bg-secondary w-full min-h-screen center pt-[10vh]'>
        <div className="w-11/12 lg:w-10/12 xl:w-9/12 center flex-col gap-9 text-white">
            <div className="text-3xl text-tertiary font-bold w-full">
                REGISTER NOW FOR A PROFESSIONAL COURSE
            </div>
            <p>Also available for siwes and I.T (Industrial Training) students</p>


        <div className="flex flex-col lg:flex-row w-full gap-[50px] gap-x-[150px] relative">
            <form className="flex flex-col gap-6 w-full">
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
                    value={formInputs.nationality}
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

            <div className="w-full h-[50vh] bg-tertiary top-[20vh] sticky"></div>
        </div>


        </div>       
    </main>
  )
}

export default TrainingPage