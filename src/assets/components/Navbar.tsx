import { useState } from "react"
import { NavInfo } from "../Constants"
import { Link, useNavigate } from "react-router-dom"
import { BiMenu, BiX } from "react-icons/bi"
import { RiArrowDropDownFill } from "react-icons/ri"


interface nav  {
    title: string,
    link: string,
    sublinks?: Object[]
}

export const Navbar = () : JSX.Element => {
    const [ showNav, setShowNav ] = useState<Boolean>(false)
    const [ currentNav, setCurrentNav ] = useState<number>(0)
    const [ currentDropDownIndex, setCurrentDropDownIndex ] = useState<number>(0)
    const [ scrolledDown, setScrolledDown ] = useState<boolean>(false)
    const [ currentDropDown, setCurrentDropDown ] = useState<string>("")
    const navigate = useNavigate()
    

    return(
        <>
           <>
        <header className={`fixed center w-full left-0 top-0 h-[8vh] md:h-[10vh] z-50 transition-all duration-1000  ${scrolledDown ? `shadow-xl bg-white` : ''}`}>
            <div className="flex items-center justify-between w-11/12 lg:w-10/12">

                <Link to={'/'} className='w-3/12 md:w-2/12'>
                    <p className='w-5/12 md:w-2/12 text-xl font-bold'>
                        devOpsTransio
                    </p>
                    {/* <img src={logo} alt="Macmay Logo" className='w-5/12 md:w-2/12'/> */}
                </Link>

                <div className={`bi bi-${showNav ? 'x-lg' : 'list'} text-blue text-3xl lg:hidden cursor-pointer`}  onClick={() => setShowNav(!showNav) }>
                    {
                        showNav ? 
                        <BiX /> :
                        <BiMenu  />
                    }
                </div>                
                
                

                <div className={`fixed w-full flex justify-center items-start  transition-all duration-1000 top-[8vh] md:top-[10vh] h-screen lg:relative lg:top-0 lg:w-9/12 lg:h-fit ${showNav ? ' left-0 z-40' : '-left-[100%] lg:-left-0'} bg-white lg:bg-transparent`}>
                        <nav className={`flex flex-col lg:flex-row items-center w-full h-screen lg:gap-9 lg:h-fit lg:bg-transparent lg:justify-end transition-all duration-1000`}>
                            {
                                NavInfo?.map((nav : nav, i : number) => (
                                    <div key={i} className={`flex flex-col transition-all duration-1000 justify-between w-full text-blue  border-b border-gray-200 lg:border-0 relative lg:w-fit`}>

                                        <div className={`flex w-full lg:w-fit py-5 px-[5%] lg:p-0 justify-between lg:justify-end lg:items-center cursor-pointer 
                                        ${currentNav === i ? 'text-green  font-bold lg:bg-transparent lg:hover:border-b border-green' : 'text-secondary hover:bg-gray-200 lg:hover:bg-transparent border-blue lg:hover:border-b'}`} 

                                        onClick={() => {
                                            if( nav.sublinks){
                                                setCurrentDropDown(currentDropDown === nav.title ? '' : nav.title) 

                                            }else{
                                                navigate(`/${nav.link}`)
                                                setCurrentNav(i)
                                                setShowNav(false)
                                                setCurrentDropDown('')
                                            }
                                        
                                        }}>
                                            <p>{nav.title}</p>        
                                            {
                                                nav.sublinks ?
                                                <RiArrowDropDownFill className="cursor-pointer h-9 w-9"/>  : ''
                                            }
        
                                        </div>
                                        {/**** NAVS WITH SUBLINKS */}
                                        {
                                            nav.sublinks ?
                                            <div className={`flex flex-col gap-1 w-full overflow-hidden transition-all duration-200 lg:duration-1000 lg:absolute lg:min-w-[300px] lg:shadow-xl lg:gap-1 bg-gray-200 lg:rounded-b-lg  z-0
                                            
                                            ${currentDropDown == nav.title ? 'lg:border lg:border-blue lg:border-t-0 block  mb-7 lg:top-[7vh] ' : 'h-0 lg:h-fit text-[0px] mb-0 lg:-top-[250px]'}
                                            
                                            `}>
        
                                                {   
                                                    nav?.sublinks?.map((sublink : any, j) => (
                                                        <Link to={`/${nav.link}/${sublink.link}`} key={j} className={`flex gap-5 py-3 lg:py-5 bg-white hover:bg-gray-100  w-full px-8 lg:px-5 lg:p-2 text-sm transition-all duration-500
                                                        ${
                                                            currentNav == i && 
                                                            currentDropDownIndex == j ? 'font-bold' :
                                                            ``
                                                        }
                                                         `} 
                                                         onClick={() => {
                                                            setShowNav(false)
                                                            setCurrentNav(i)
                                                            setCurrentDropDown('')
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
        
                        <div className="h-full lg:hidden bg-transparent w-0 md:w-[60%]" onClick={ ()=> setShowNav(!showNav)}>
                        
                        </div>
        
                    </div>
            </div>

            
        </header>
        </>
        </>
    )
}