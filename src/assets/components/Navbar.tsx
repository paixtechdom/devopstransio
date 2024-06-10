import { NavInfo } from "../Constants"
import { Link, useNavigate } from "react-router-dom"
import { BiMenu, BiX } from "react-icons/bi"
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/AppStore"
import { setCurrentDropDown, setCurrentNav, toggleShowNav } from "../store/navigation/navigationSlice"
import { nav } from "../Interfaces"


export const Navbar: React.FC = () => {
    const navigation = useSelector((state: RootState) => state.navigation)
    const dispatch = useDispatch()
    const showNav = navigation.showNavbar
    const currentNav = navigation.currentNav
    const currentDropDownIndex = navigation.currentDropDownIndex
    const scrolledDown = navigation.scrolledDown
    const currentDropDown = navigation.currentDropDown


    const navigate = useNavigate()
    

    return(
        <>
           <>
        <header className={`fixed center w-full left-0 top-0 h-[8vh] md:h-[10vh] z-50 transition-all duration-1000  ${scrolledDown ? `shadow-xl bg-secondary` : 'bg-transparent'}`}>
            <div className="flex items-center justify-between w-11/12 lg:w-10/12 xl:w-9/12">

                <Link to={'/'} className='w-3/12 md:w-2/12'>
                    <p className='w-5/12 md:w-2/12 text-xl font-bold text-white'>
                        devOpsTransio
                    </p>
                    {/* <img src={logo} alt="Macmay Logo" className='w-5/12 md:w-2/12'/> */}
                </Link>

                <div className={`bi bi-${showNav ? 'x-lg' : 'list'} text-blue text-3xl lg:hidden cursor-pointer text-white`}  onClick={() => dispatch(toggleShowNav())}>
                    {
                        showNav ? 
                        <BiX /> :
                        <BiMenu  />
                    }
                </div>                
                
                

                <div className={`fixed w-full flex justify-center items-start  transition-all duration-1000 top-[8vh] md:top-[10vh] h-screen lg:relative lg:top-0 lg:w-9/12 lg:h-fit ${showNav ? ' left-0 z-40' : '-left-[100%] lg:-left-0'} bg-zinc-900 lg:bg-transparent`}>
                        <nav className={`flex flex-col lg:flex-row items-center w-full h-screen lg:gap-9 lg:h-fit lg:bg-transparent lg:justify-end transition-all duration-1000`}>
                            {
                                NavInfo?.map((nav : nav, i) => (
                                    <div key={i} className={`flex flex-col transition-all duration-1000 justify-between w-full text-blue lg:border-0 relative lg:w-fit`}>

                                        <div className={`flex w-full lg:w-fit py-5 px-[5%] lg:p-0 justify-between lg:justify-end lg:items-center cursor-pointer text-gray-200 bg-secondary lg:bg-transparent
                                        ${currentNav === i ? 
                                            'border-b-2 border-primary font-bold lg:bg-transparent lg:hover:border-b' 
                                        : 'hover:bg-opacity-90 lg:hover:bg-transparent border-blue lg:hover:border-b-2 lg:hover:border-primary'} hover:bg-opacity-10 hover:bg-pri mary`} 

                                        onClick={() => {
                                            if( nav.sublinks){
                                                dispatch(setCurrentDropDown(currentDropDown === nav.title ? '' : nav.title))

                                            }else{
                                                navigate(`/${nav.link}`)
                                                dispatch(setCurrentNav(i))
                                                dispatch(toggleShowNav())
                                                dispatch(setCurrentDropDown(""))
                                            }
                                        
                                        }}>
                                            <p>{nav.title}</p>        
                                            {
                                                nav.sublinks ?
                                                currentDropDown == nav.title ?
                                                <RiArrowDropUpFill className="cursor-pointer h-9 w-9"/>  
                                                : 
                                                <RiArrowDropDownFill className="cursor-pointer h-9 w-9"/>  
                                                :  ''
                                            }
        
                                        </div>
                                        {/**** NAVS WITH SUBLINKS */}
                                        {
                                            nav.sublinks ?
                                            <div className={`flex flex-col gap-[1px] w-full overflow-hidden transition-all duration-200 lg:duration-1000 lg:absolute lg:min-w-[250px] lg:bg-primary
                                            ${currentDropDown == nav.title ? 'lg:left-0' : 'h-0 lg:h-fit text-[0px]  lg:left-[700%]'} lg:top-[7vh]`}>
        
                                                {   
                                                    nav?.sublinks?.map((sublink : any, j) => (
                                                        <Link to={`/${nav.link}/${sublink.link}`} key={j} className={`flex gap-5 py-3 lg:py-5 bg-secondary bg-opacity-[0.35] lg:bg-opacity-[1] hover:bg-opacity-[0] lg:hover:bg-opacity-[0.95] text-gray-200
                                                        w-full px-8 lg:px-5 lg:p-2 text-sm transition-all duration-500
                                                        ${
                                                            currentNav == i && 
                                                            currentDropDownIndex == j ? 'font-bold' :
                                                            ``
                                                        }
                                                         `} 
                                                         onClick={() => {
                                                            dispatch(toggleShowNav())
                                                            dispatch(setCurrentNav(i))
                                                            dispatch(setCurrentDropDown(""))
                                                        }}>
                                                        <p className={``}>{sublink.title}</p>
                                                    </Link>
                                                    ))
                                                }
                                            </div>  : ''
                                        }
                                    </div>
                                ))
                            }
                        </nav>
                    </div>
            </div>

            
        </header>
        </>
        </>
    )
}
