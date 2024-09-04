import { Headers } from "../../assets/components/Headers"
import googleCloud from "../../assets/images/tools/googleCloud.png"
import argo from "../../assets/images/tools/argo.png"
import aws from "../../assets/images/tools/aws.png"
import azure from "../../assets/images/tools/azure.png"
import jenkins from "../../assets/images/tools/jenkins.png"
import chef from "../../assets/images/tools/chef.png"
import digitalOcean from "../../assets/images/tools/digitalOcean.png"
import docker from "../../assets/images/tools/docker.png"
import kubernetes from "../../assets/images/tools/kubernetes.png"
import terraform from "../../assets/images/tools/terraform.png"
import ansible from "../../assets/images/tools/ansible.png"
import grafana from "../../assets/images/tools/grafana.png"
import prometheus from "../../assets/images/tools/prometheus.png"
import githubActions from "../../assets/images/tools/githubActions.png"
import gitlab from "../../assets/images/tools/gitlab.png"
import helm from "../../assets/images/tools/helm.png"
import oracleCloud from "../../assets/images/tools/oracleCloud.png"
import puppet from "../../assets/images/tools/puppet.png"
import bash from "../../assets/images/tools/bash.png"
import { Parallax } from "../../assets/components/Parallax"
import { TrimText } from "../../assets/Functions"


const Tools = [
  {
    tool: "Google Cloud",
    img: googleCloud
  },
  {
    tool: "Argo",
    img: argo
  },
  {
    tool: "Aws",
    img: aws
  },
  {
    tool: "Docker",
    img: docker
  },
  {
    tool: "Azure",
    img: azure
  },
  {
    tool: "Chef",
    img: chef
  },
  {
    tool: "Digital Ocean",
    img: digitalOcean
  },
  {
    tool: "Kubernetes",
    img: kubernetes
  },
  {
    tool: "Github Actions",
    img: githubActions
  },
  {
    tool: "GitLab",
    img: gitlab
  },
  {
    tool: "Helm",
    img: helm
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
  {
    tool: "Oracle Cloud",
    img: oracleCloud
  },
  {
    tool: "Puppet",
    img: puppet
  },
  {
    tool: "Bash",
    img: bash
  },
]



export const DevOpsTools = () => {
  return (
    <section className='center w-full mt-[15vh]'>
        <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row items-center gap-y-[50px] gap-[150px]">
          <div className="w-full lg:w-6/12">
            <Headers 
              text="Tools we use" 
              bg="primary"
              />
          </div>

          <div className="grid grid-cols-4 md:grid-cols-5 place-items-center gap-y-9 gap-9 w-full bg-se condary bg-opacity-30">
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
