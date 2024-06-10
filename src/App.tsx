import { useEffect } from "react";
import { AppRouter } from "./AppRouter";
import { useDispatch } from "react-redux";
import { toggleScrolledDown } from "./assets/store/navigation/navigationSlice";

function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    document.addEventListener('scroll', () => {
        dispatch(toggleScrolledDown(document.documentElement.scrollTop > 200 ? true : false))
    })
    document.removeEventListener('scroll', () => null)
}, [])



  return (
    <div className='App'>
        <AppRouter />
    </div>
  );


}
export default App

