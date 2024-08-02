import { FC, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../assets/store/AppStore"
import { ServicesList } from "../../assets/Constants"
import { Button } from "../../assets/components/Button"
import { setCurrentService } from "../../assets/store/navigation/navigationSlice"
import { BiX } from "react-icons/bi"

export const AService = () => {
    const navigation = useSelector((state: RootState) => state.navigation)
    const currentService = navigation.currentService
    const dispatch = useDispatch()
    const [ service, setService ] = useState<any>({})

    useEffect(() => {
        let matched_service = ServicesList.filter((a, i) => currentService == i && a)
        setService(matched_service[0])
    }, [currentService])

    useEffect(() => {
        if(currentService == -1){
            document.body.style.overflowY="auto"
        }else{
            document.body.style.overflowY = "hidden"
        }
    }, [currentService])

    const closeService = () => {
        // setTimeout(() => {
            dispatch(setCurrentService(-1))
        // }, 1000);
    }
 

    return(
        <main className={`${currentService == -1 ? "-top-[100vh]" : "top-0"} fixed h-screen overflow-y-auto overflow-x-hidden bg-secondary bg-opacity-60 backdrop-blur-xl border-primary border-opacity-60 w-full z-40 flex justify-center py-[10vh] lg:py-[15vh] transition-all duration-1000 ease-in-out`}>

            <div className="w-11/12 lg:w-10/12 xl:w-9/12 relative">

                <div className="flex justify-between items-center gap-3 w-full my-7 sticky top-0 bg-secondary bg-opacity-30 backdrop-blur-2xl border-primary border-opacity-60 p-4 rounded-xl pl-6">
 
                        <h1 className="font-bold text-2xl text-gray-100 w-11/12 uppercase">{service?.title}</h1>

                        <button onClick={closeService} 
                            className="bg-secondary border border-primary  rounded-lg size-9 center text-2xl text-gray-100 cursor-pointer hover:opacity-90 hover:scale-110">
                            <BiX />
                        </button>
                </div>
                
                {
                    service?.body?.map((content:any, i:any) => (
                        <Serializers key={i} content={content}/>
                    ))
                }

                <div className="pb-[15vh] w-fit flex items-center gap-5 flex-wrap" onClick={closeService}>
                    <Button 
                        text={"Contact Us"}
                        btnType="primary"
                    />
                    <Button 
                        text={"Close"}
                        btnType="secondary"
                    />
                </div>
            </div>

        </main>
    )
}


const Serializers:FC<any> = ({content}) => {
    switch (content.type) {
        case "heading":
            return( 
                <h2 className="text-gray-400 mb-9 font-bold text-xl flex flex-col gap-3">
                   {content.content}
                </h2>
            )                
            break;
        case "p":
            return( 
                <div className="flex flex-col gap-8 mb-9">
                    {
                        content.content.map((con:string, i:number) => (
                            <p key={i} className="leading-relaxed tracking-wide text-zinc-300">{con}</p>
                        ))
                    }
                </div>
            )                
            break;
        case "ul":
            return( 
                <div className="flex flex-col gap-3 mb-[10vh]">
                    <h2 className="text-zinc-400 font-bold text-lg mt-6">{content.intro}</h2>
                    <div className="flex flex-col gap-3">
                        {
                            content.li.map((l:any, i:number) => (
                                <div key={i} className="flex flex-col gap-3">
                                    <h3 className="text-gray-100 border-b-2 border-primary w-fit border-opacity-60 mt-4">
                                        {l.title}
                                    </h3>
                                    <p className="leading-relaxed tracking-wide text-gray-300">{l.content}</p>
                                </div>
                            ))
                        }
                    </div>
                    
                </div>
            )                
        break;
        case "ol":
            return( 
                <div className="flex flex-col gap-3 mb-9">
                    <h2 className="text-zinc-400 font-bold text-lg">{content.intro}</h2>
                    <div className="flex flex-col gap-3">
                        {
                            content.li.map((l:any, i:number) => (
                                <div key={i} className="flex flex-col gap-2">
                                    {
                                        l.title ?
                                        <>
                                        <div className="flex items-center gap-2 mt-4">
                                            <p className="leading-relaxed tracking-wide size-4 bg-secondary border border-primary border-opacity 60 rounded-full"></p>
                                            <h3 className="text-gray-100 font-bold">
                                                {l.title}
                                            </h3>

                                        </div>
                                        <p className="leading-relaxed tracking-wide text-gray-300 ml-4">{l.content}</p>
                                        </> :
                                        <>
                                        <div className="flex items-center gap-2 mt-4 ml-4">
                                            <p className="leading-relaxed tracking-wide size-4 bg-secondary border border-primary border-opacity 60 rounded-full"></p>
                                            <p className="leading-relaxed tracking-wide text-gray-300">{l.content}</p>

                                        </div>
                                        </>
                                    }

                                </div>
                            ))
                        }
                    </div>
                    
                </div>
            )                
        break;
    
        // default:
        //     break;
    }    
}