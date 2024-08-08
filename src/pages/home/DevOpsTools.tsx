import { Headers } from "../../assets/components/Headers"

const Tools = [
  {
    tool: "Linux",
    img: "linux"
  },
  {
    tool: "Git",
    img: "git"
  },
  {
    tool: "Github",
    img: "github"
  },
  {
    tool: "Maven",
    img: "maven"
  },
  {
    tool: "jenkins",
    img: "jenkins"
  },
  {
    tool: "Dependency",
    img: "dependency"
  },
  {
    tool: "Sonar Qube",
    img: "sonarQube"
  },
  {
    tool: "Docker",
    img: "docker"
  },
  {
    tool: "Kubernetes",
    img: "kubernetes"
  },
  {
    tool: "Terraform",
    img: "terraform"
  },
  {
    tool: "Ansible",
    img: "ansible"
  },
  {
    tool: "Grafana",
    img: "grafana"
  },
  {
    tool: "Prametheus",
    img: "prametheus"
  },
]
export const DevOpsTools = () => {
  return (
    <section className='center w-full my-[15vh] lg:mt-[35vh]'>
        <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row items-center gap-y-[50px] gap-[150px]">
          <div className="w-full lg:w-6/12">

            <Headers 
            text="Tools we use" 
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-9 w-full">
            {
              Tools.map((tool, i) => (
                // <img key={i} src={tool.img} alt={tool.tool} />
                <div key={i} className="flex items-center gap-2">
                  <p className="size-4 bg-primary rounded-full">
                  </p>

                  <p className="font-bold text-zinc-700">{tool.tool}</p>
                </div>
              ))
            }
          </div>
          
        </div>
    </section>
  )
}
