import { Services } from "../../assets/Interfaces"
import { Headers } from "../../assets/components/Headers"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentHoveredService, setCurrentService } from "../../assets/store/navigation/navigationSlice"
import { Button } from "../../assets/components/Button"
import { Parallax } from "../../assets/components/Parallax"
import { TrimText } from "../../assets/Functions"
import { DevOpsSVG, Infrastructure, Kubernetes, Testing, SceneSupport, K8s, LoadTesting, AppModernization } from "../../assets/SVGS"
import { RootState } from "../../assets/store/AppStore"


export const ServicesList = [
    {
        svg: <Infrastructure i={0}/>,
        title: 'CI/CD Automation',
        desc: "Enabling application deployment and management easier and faster like never before",
        body: [
            {
                type: "heading",
                content: "Enabling application deployment and management easier and faster like never before",
            },
            {
                type: "p",
                content: [
                    "CI/CD stands for Continuous Integration and Continuous Deployment. It's a method that helps software development teams improve their efficiency and deliver products to users more quickly."
                ]
            },
            {
                type: "ul",
                intro: "Here's a breakdown of what CI and CD entail:",
                li: [
                    {
                        title: "CI (Continuous Integration)",
                        content: "Involves developers writing code and saving their changes in a shared repository. Automated tests are then run to ensure the new code functions properly and meets predefined quality standards." 
                    },
                    {
                        title: "CD (Continuous Deployment)",
                        content: "Occurs after the code successfully passes all automated tests. It's automatically built, packaged, and deployed to production environments. This allows the software to be available to users promptly, whose feedback can further improve subsequent versions."
                    }
                ]
            },
            {
                type: "heading",
                content: "Why Use CI/CD Automation"
            },
            {
                type: "ol",
                intro: "There are several advantages to implementing CI/CD automation:",
                li: [
                    {
                        title: "Speed",
                        content: "Automation accelerates the development cycle, enabling teams to release updates more frequently"
                    },
                    {
                        title: "Quality",
                        content: "Automated tests detect errors early in the development process, ensuring the software remains reliable and of high quality."
                    },
                    {
                        title: "Reduced Manual Work",
                        content: "By automating testing and deployment processes, developers can focus more on coding and enhancing the software's functionality."
                    }
                ]
            }
        ]
    },

    {
        svg: <Kubernetes i={1}/> ,
        title: 'DevSecOps',
        desc: "Integrating Multi-Layered Security with Automation",
        body: [
            {   
                type: "heading",
                content: "Integrating Multi-Layered Security with Automation",
            },
            {
                type: "p",
                content: [
                    "DevSecOps focuses on integrating security into every stage of software development and operations, using automation to ensure thorough and continuous protection"
                ]
            },
            {
                type: "ul",
                intro: "Here’s a straightforward overview:",
                li: [
                    {
                        title: "DevSecOps employs automation and multi-layered security measures.",
                        content: "Automated security checks run continuously throughout the development process, and multiple layers of security are integrated into every phase to detect and address vulnerabilities early."
                    },
                    {
                        title: "DevSecOps incorporates security throughout the software development lifecycle.",
                        content: "During development, developers write and update code with security in mind. Automated tools scan the code for vulnerabilities as it’s being developed. In operations, the code is managed in production with continuous security monitoring and updates."
                    },
                    {
                        title: "There are several advantages to adopting DevSecOps practices.",
                        content: "It enhances security by ensuring threats are identified and resolved early with multi-layered security measures. Automation speeds up the development process, allowing for quick and secure releases. Additionally, DevSecOps promotes collaboration among developers, security experts, and operations teams, ensuring that security is integrated effectively into operations."
                    }

                ]
            }
        ]
    },
    
    {
        svg: <DevOpsSVG i={2}/> ,
        title: '24X7 Server Monitoring & Support',
        desc: "24/7 Support over 1000 servers and 300 webprojects: from small corporate sites to major online stores, media sites and complex microservices projects. Do you want to be online 24/7 and sleep well? You’re at the right place!",
        body: [
            {
                type: "p",
                content: [
                    "24/7 Server monitoring and support cater to a wide range of needs, spanning from small corporate websites to large-scale online stores, media sites, and complex microservices projects. If your goal is uninterrupted online presence and peace of mind, you've come to the right place!",
                    "Server monitoring and support ensure that your website, application, or online platform runs smoothly without interruptions. It's like having a team of experts keeping an eye on your online presence round the clock. They are ready to tackle any issues promptly to minimize downtime and keep your services accessible.",
                    "Anyone who relies on their online presence for their business can benefit from server monitoring and support. Whether you run a small business website, a bustling e-commerce store, a content-heavy media site, or a complex setup of microservices, these services ensure your operations remain uninterrupted.",
                    "The benefits include minimizing downtime to ensure your website or application is always available, providing peace of mind knowing that experts are monitoring your systems, and swiftly resolving technical issues to reduce business impact. Additionally, regular updates, backups, and security checks prevent problems before they affect your operations. Optimization of server performance further enhances user experience with faster loading times and seamless functionality",
                    "Expect continuous monitoring of your server's performance, security, and uptime, complemented by real-time alerts that notify you of any potential issues immediately. Expert support is available for quick resolution of technical issues, while scheduled maintenance ensures your systems stay up-to-date and secure. Ongoing performance optimization ensures your server operates at peak efficiency, supporting your business objectives effectively."
                ]
            }
        ]
    },

    {
        svg: <Testing i={3}/> ,
        title: 'Cloud Migration',
        desc: "In today's fast-paced digital world, keeping up means quickly and smartly adapting to new trends. As you navigate the constantly changing tech landscape, consider the huge advantages of migrating your workload from on-premise infrastructure to the cloud.",
        body: [
            {
                type: "p",
                content: [
                    "Moving to the cloud can save you money by reducing the need for expensive hardware and maintenance. It also offers greater flexibility, allowing you to easily scale your operations up or down based on your needs. Plus, cloud services provide robust security measures to protect your data, along with reliable backups to prevent data loss.",
                    "Additionally, cloud migration enables better collaboration, as your team can access and work on projects from anywhere with an internet connection. This can lead to increased productivity and faster innovation.",
                    "In summary, migrating to the cloud can provide cost savings, flexibility, enhanced security, and improved collaboration, helping your business stay competitive in today's digital landscape."
                ]
            }
        ]
    },

    {
        svg: <SceneSupport i={4}/>,
        title: 'DevOps & CI/CD',
        desc: 'We help companies adopt the best DevOps practices and CI/CD automation techniques to speed up development and make services more reliable in production.',
        body: [ 
            {
                type: "p",
                content: [
                    "DevOps combines development and operations to improve collaboration and productivity by automating processes and integrating teams. This approach helps in identifying and fixing issues quickly, leading to faster delivery of software and better product quality.",
                    "CI/CD stands for Continuous Integration and Continuous Deployment. CI means regularly merging code changes into a shared repository, allowing for automatic testing and integration. CD takes it a step further by automatically deploying code changes to production, ensuring that updates are released quickly and consistently.",
                ]
            },
            {
                type: "ol",
                intro: "By implementing DevOps and CI/CD, companies can:",
                li: [
                    {
                        content: "Release new features and updates faster",
                    },
                    {
                        content: "Improve the quality and stability of their software",
                    },
                    {
                        content: "Enhance collaboration between development and operations teams",
                    },
                    {
                        content: "Quickly respond to user feedback and market changes",
                    },
                ]
            }
        ]
    },

    //  NO SVGS YET

    {
        // svg: <img src={devopschats} alt="K8s image"/>,
        svg: <K8s i={5}/>,
        title: 'Fault-Tolerant Infrastructure',
        desc: "Your project will be exceptionally stable and resilient, capable of withstanding the failure of multiple servers. You won't need to worry, not even if a meteorite were to strike the data center.",
        body: [
            {
                type: "p",
                content: ["Fault-tolerant infrastructure ensures that your systems remain operational even if individual components fail. This reliability is achieved through redundant hardware, automatic failover mechanisms, and continuous monitoring. It's like having backups for your backups, ensuring uninterrupted service and peace of mind for your business operations."]
            },
            {
                type: "ol",
                intro: "Benefits of fault-tolerant infrastructure include:",
                li: [
                    {
                        content: "Minimized downtime and improved reliability"
                    },
                    {
                        content: "Enhanced data protection and disaster recovery capabilities"
                    },
                    {
                        content: "Consistent performance under unexpected circumstances"
                    },
                    {
                        content: "Greater confidence in handling peak loads or unexpected events"
                    },
                ]
            }
        ]
    },

    {
        svg: <LoadTesting i={6}/>,
        title: 'Load & Stress Testing',
        desc: "We’ll help you see what your project can handle! Using specialized tools, we simulate real user behavior on your site to see how it performs. We observe where it might slow down or fail and identify the load that causes these issues. Then, we analyze the data and provide expert recommendations.",
        body: [
            {
                type: "ul",
                li: [
                    {
                        title: "Load Testing",
                        content: "measures the system's performance under expected user loads. The goal is to ensure the site can handle normal traffic without issues. During this process, we simulate typical user activity to see if the site remains stable and responsive. The outcome is identifying performance bottlenecks and optimizing system capacity."
                    },
                    {
                        title: "Stress Testing",
                        content: "evaluates how the system performs under extreme or peak loads. The goal is to determine the breaking point and how the system recovers from failures. We push the system beyond its normal operational capacity to identify weak points. The outcome is finding out how much stress the system can handle before it crashes and improving its robustness."
                    },
                ]
            },
            {
                type: "ol",
                intro: "Key Benefits of load and stress testing include",
                li: [
                    {
                        content: "Ensuring your site's reliability under varying loads"
                    },
                    {
                        content: "Helping plan for future growth and higher traffic"
                    },
                    {
                        content: "Identifying areas for performance optimization to enhance user experience."
                    }
                ]
            },
            {
                type: "p",
                content: [
                    "Our approach involves using real-world scenarios to mimic user behavior, monitoring system performance to identify slowdowns and failures, analyzing collected data to understand performance limits and issues, and providing expert advice on optimizing performance and improving system resilience.",
                    "By conducting load and stress tests, we ensure your site is ready to handle real-world challenges, keeping your users happy and your project successful."
                ]
            }
        ]
    },


    {
        svg: <AppModernization i={7}/>,
        title: "App Modernization",
        desc: "Switching to microservices can make your app faster and more efficient. Microservices break down your app into smaller, independent parts, each handling a specific function. This allows for quicker updates, better performance, and easier scaling. Start by identifying key components of your app that can be separated, choose the right technologies, and plan a gradual transition.",
        body: [
            {
                type: "p",
                content: [
                    "First, let's understand what microservices are. Imagine your app as a big machine where every part is connected. If one part breaks or needs an upgrade, the whole machine has to stop. Microservices change this by making each part of the machine work independently. So, if one part needs fixing or an upgrade, the rest of the machine can keep running smoothly",
                    "One of the biggest benefits of microservices is speed. Because each part of the app is separate, you can work on one part without worrying about the others. This means you can roll out updates faster and fix problems quicker. It also makes it easier to add new features because you only have to focus on the part of the app that needs the change.",
                    "Performance also gets a big boost. Since each microservice is focused on a specific task, you can optimize it to run as efficiently as possible. This is much harder to do with a big, monolithic app where everything is intertwined. Better performance means your app runs smoother and can handle more users without slowing down.",
                    "Scalability is another major advantage. If one part of your app gets a lot of traffic, like a payment system during a big sale, you can scale just that part up. This is more efficient and cost-effective than scaling the entire app, which you would have to do with a monolithic structure.",
                    "To start with microservices, begin by looking at your current app and identifying which parts can be separated into independent services. These are usually distinct functions like user authentication, payment processing, or inventory management.",
                    "Next, choose the right technologies to support your microservices. Tools like Docker can help you create and manage these small services, while Kubernetes can help you orchestrate and scale them.",
                    "Planning the transition is crucial. Instead of switching everything at once, start with a less critical part of your app to test the waters. Gradually move more parts to microservices, ensuring each transition is smooth and well-monitored.",
                    "By modernizing your app with microservices, you can achieve faster development cycles, better performance, and a more scalable system. It’s a smart move that can significantly improve how your app runs and grows."
                ]
            }
        ]
    }

]


export const ServicesListing = () => {
    
    return(
        <div id="servicesListing" className="w-full center pt-[15vh]">
            <div className="w-11/12 lg:w-10/12 center flex-col  gap-[10vh] ">
                <div className="w-full">
                    <Headers 
                        text="Our Services"
                    />
                </div>


                <div className="w-11/12 flex flex-col gap-y-[10vh] xl:gap-y-[15vh] lg:gap-[2 0vh]">
                    {
                        ServicesList.map((service: Services, i) => (
                            <ServicesComponent 
                                key={i}
                                title={service.title}
                                desc={service.desc.slice(0, 100)+"..."}
                                index={i}
                                svg={service.svg}                                
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


interface serviceInterface {
    svg: JSX.Element,
    title: string,
    desc: string,
    index: number
}



const ServicesComponent:FC<serviceInterface> = ({svg, title, desc, index}) => {
    const currentHoveredService = useSelector((state: RootState) => state.navigation.currentHoveredService)
    const dispatch = useDispatch()

    return(        
        <div 
            onClick={() => {
                dispatch(setCurrentService(index))
            }
            } 
            onMouseOver={() => {
                dispatch(setCurrentHoveredService(index))
            }}
            onMouseOut={() => {
                dispatch(setCurrentHoveredService(-1))
            }}
            className={`cursor-pointer flex items-center relative lg:justify-between flex-col
            ${index % 2 == 0 ? "lg:flex-row justify-start" : "lg:flex-row-reverse justify-end"} w-full`}>
                
            <Parallax id={TrimText(title)} type={index % 2 == 0 ? "left" : "right"} className="w-fit ">
                <div className="h-fit [50vh] lg:h- [45vh] w-full  rounded-2xl overflow-hidden shadow-xl bg-primary  lg:scale-[1]"> 
                    {svg}
                </div>
            </Parallax>
            <div className={`flex flex-col p-6 transition-all duration-1000 ease-in-out rounded-2xl gap-6 shadow-xl w-full lg:w-6/12 relative bg-opacity-40 backdrop-blur-xl bg-secondary
                ${index % 2 == 0 ? "lg:-translate-x-[50%]" : 
                "lg:translate-x-[50%]"}

                ${currentHoveredService == index ? "lg:-translate-x-[0]" : ""}
                `}>
                    
                <h2 className="font-bold text-xl">{title}</h2>
                <p>{desc}</p>

                <Button 
                    text="read more"
                    btnType={index % 2 == 0 ? "primary" : "secondary"}
                />
            </div>
            
        </div>
    )

}

