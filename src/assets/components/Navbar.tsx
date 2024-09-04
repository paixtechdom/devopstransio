import { logo, NavInfo } from "../Constants"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { BiMenu, BiX } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/AppStore"
import {setCurrentNav, toggleShowNav } from "../store/navigation/navigationSlice"
import { nav } from "../Interfaces"
import { Button } from "./Button"
import { useEffect } from "react"



export const Navbar: React.FC = () => {
    const navigation = useSelector((state: RootState) => state.navigation)
    const dispatch = useDispatch()
    const showNav = navigation.showNavbar
    const currentNav = navigation.currentNav
    const scrolledDown = navigation.scrolledDown
    const location = useLocation()


    const navigate = useNavigate()
    
    useEffect(() => {
        NavInfo.forEach((nav, index) => {
            if(location.pathname.includes(nav.link)){
                dispatch(setCurrentNav(index)) 
            }else if(location.pathname == "/"){
                dispatch(setCurrentNav(0))
            }else if(location.pathname.includes("contact")){
                dispatch(setCurrentNav(NavInfo.length))
                
            }
        })
    }, [location])


    
    return(
        <>
           <>
        <header className={`fixed center w-full left-0 top-0 h-[8vh] md:h-[10vh] z-50 transition-all bg-secondary duration-1000   ${scrolledDown ? `shadow-xl bg-opacity-50 backdrop-blur-2xl` : location.pathname !== "/" ? "" : 'bg-opacity-0'}`}>
            <div className="flex items-center justify-between w-11/12 lg:w-10/12">

                <Link to={'/'} className='w-3/12 md:w-2/12'>
                    <img src={logo} alt="Cloud Transio's Logo" className='w-full'/>
                </Link>

                <div className={`bi bi-${showNav ? 'x-lg' : 'list'} text-blue text-3xl lg:hidden cursor-pointer ${location.pathname == "/" && !scrolledDown ? "text-zinc-100" : "text-zinc-900" }`}  onClick={() => dispatch(toggleShowNav())}>
                    {
                        showNav ? 
                        <BiX /> :
                        <BiMenu  />
                    }
                </div>                
                
                

                <div className={`fixed w-full flex justify-center items-center  transition-all duration-1000 top-[8vh] md:top-[10vh] h-screen lg:relative lg:top-0 lg:w-fit 9/12 lg:h-fit ${showNav ? ' left-0 z-40' : '-left-[100%] lg:-left-0'} bg-secondary lg:bg-transparent`}>

                    <nav className={`flex flex-col lg:flex-row items-center w-full h-screen lg:gap-9 lg:h-fit lg:bg-transparent lg:justify-start transition-all duration-1000`}>
                        {
                            NavInfo?.map((nav : nav, i) => (
                                <div key={i} className={`flex flex-col transition-all duration-1000 justify-between w-full text-blue lg:border-0 relative lg:w-fit`}>

                                    <div className={`flex w-full lg:w-fit py-5 px-[5%] lg:p-0 justify-between lg:justify-end lg:items-center cursor-pointer 
                                    ${currentNav === i ? 
                                        'font-bold text-primary' : 
                                        location.pathname == "/" && !scrolledDown ? 
                                        'text-zinc-900 lg:text-zinc-100 hover:text-primary hover:font-bold'
                                        : 
                                        'text-black lg:text-black hover:text-primary lg:hover:text-black hover:font-bold'
                                        }`} 

                                    onClick={() => {
                                        navigate(`/${nav.link}`)
                                        dispatch(setCurrentNav(i))
                                        dispatch(toggleShowNav())
                                    }}>
                                        <p className="">{nav.title}</p>        
    
                                    </div>
                                  
                                </div>
                            ))
                        }

                        <Link to="/contact" className="lg:hidden w-11/12" 
                            onClick={() => {
                                dispatch(setCurrentNav(4))
                                dispatch(toggleShowNav())
                            }}
                        >
                            <Button 
                                text="Contact Us"
                                btnType="primary"
                                />
                        </Link>
                    </nav>

                    
                </div>
                <Link to="/contact" className="hidden lg:block">
                    <Button 
                        text="Contact Us"
                        btnType="primary"
                        baseTextColor={location.pathname == "/" && !scrolledDown ? "text-zinc-300" : "text-zinc-900"}
                    />
                </Link>

            </div>

            
        </header>
        </>
        </>
    )
}
