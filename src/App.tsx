import { useEffect } from "react";
import { AppRouter } from "./AppRouter";
import { useDispatch } from "react-redux";
import { toggleScrolledDown } from "./assets/store/navigation/navigationSlice";
import "flag-icons/css/flag-icons.css"
import "flag-icons/css/flag-icons.min.css"


function App() {
  const dispatch = useDispatch()
  


  useEffect(() => {
    document.addEventListener('scroll', () => {
        dispatch(toggleScrolledDown(document.documentElement.scrollTop > 200 ? true : false))
    })
    document.removeEventListener('scroll', () => null)
  }, [])





  return (
    <div className='App bg-primary relative overflow-hidden'>
        <AppRouter />
    </div>
  );


}
export default App

