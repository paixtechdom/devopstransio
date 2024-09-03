import { Headers } from "../../assets/components/Headers"
import linux from "../../assets/images/tools/linux.png"
import git from "../../assets/images/tools/git.png"
import github from "../../assets/images/tools/github.png"
import maven from "../../assets/images/tools/maven.png"
import jenkins from "../../assets/images/tools/jenkins.png"
import dependencyCheck from "../../assets/images/tools/dependencyCheck.png"
import sonarQube from "../../assets/images/tools/sonarQube.png"
import docker from "../../assets/images/tools/docker.png"
import kubernetes from "../../assets/images/tools/kubernetes.png"
import terraform from "../../assets/images/tools/terraform.png"
import ansible from "../../assets/images/tools/ansible.png"
import grafana from "../../assets/images/tools/grafana.png"
import prometheus from "../../assets/images/tools/prometheus.png"
import { Parallax } from "../../assets/components/Parallax"
import { TrimText } from "../../assets/Functions"


const Tools = [
  {
    tool: "Linux",
    img: linux
  },
  {
    tool: "Git",
    img: git
  },
  {
    tool: "Github",
    img: github
  },
  {
    tool: "Docker",
    img: docker
  },
  {
    tool: "Maven",
    img: maven
  },
  {
    tool: "Dependency-check",
    img: dependencyCheck
  },
  {
    tool: "Sonar Qube",
    img: sonarQube
  },
  {
    tool: "Kubernetes",
    img: kubernetes
  },
  {
    tool: "Terraform",
    img: terraform
  },
  {
    tool: "Ansible",
    img: ansible
  },
  {
    tool: "Grafana",
    img: grafana
  },
  {
    tool: "Prometheus",
    img: prometheus
  },
  {
    tool: "jenkins",
    img: jenkins
  },
]



export const DevOpsTools = () => {
  return (
    <section className='center w-full lg:mt-[25vh]'>
        <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row items-center gap-y-[50px] gap-[150px]">
          <div className="w-full lg:w-6/12">
            <Headers 
              text="Tools we use" 
              />
          </div>

          <div className="grid grid-cols-4 md:grid-cols-5 place-items-center gap-y-9 gap-9 w-full">
            {
              Tools.map((tool, i) => (
                <Parallax key={i} className="w-fit" id={TrimText(tool.tool)}
                type={
                  i % 2 == 0 ? "right"
                  : "left"
                }>
                <img src={tool.img} alt={tool.tool} className="w-10/12 bg-prim ary"/>
                </Parallax>
              ))
            }
          </div>
          
        </div>
    </section>
  )
}
