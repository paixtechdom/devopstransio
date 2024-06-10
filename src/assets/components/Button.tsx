import { useNavigate } from "react-router-dom"
import { button } from "../Interfaces"


export const Button :React.FC <button> = ({text , navigateTo}) => {
    const navigate = useNavigate()
    return(
       <button onClick={() => {
        if(navigateTo){
            navigate(`/${navigateTo}`)
        }
       }}
       className="bg-secondary p-2 px-6 rounded-full text-gray-100 w-fit">
        {text}
       </button>
    )
}