import { ArrowDown, DownloadSimple } from "phosphor-react"
import { AiFillGithub } from "react-icons/ai"
import { BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { Button } from "../components/Button"
import { AboutMe } from "../AboutMe"
import { Link } from "react-scroll"
import { Projects } from "../Projects"

export function Home() {
  return (
    <>
      <div className="w-full">
        <div className="content-main w-full flex justify-center h-full min-height items-center">
          <section className="ml-4 flex flex-col h-full p-4 justify-center gap-4">
            <div className="flex flex-col gap-6 dark:bg-gray-900 p-6 rounded-md shadow-lg">
              <a 
                className="text-gray-800 dark:text-gray-200 border rounded border-transparent hover:border-gray-800 dark:hover:border-gray-200 p-1" 
                href="https://github.com/GabrielRSiqueira18" 
                target="_blank"
                >
                  <AiFillGithub size={28} />
              </a>
              <a 
                className="text-gray-800 dark:text-gray-200 border rounded border-transparent hover:border-gray-800 dark:hover:border-gray-200 p-1" 
                href="https://www.linkedin.com/in/gabriel-ribeiro-siqueira-0968b9240/"
                target="_blank"
                >
                
                <BsLinkedin size={28}/> 
              </a>
              <a 
                className="text-gray-800 dark:text-gray-200 border rounded border-transparent hover:border-gray-800 dark:hover:border-gray-200 p-1" 
                href="https://api.whatsapp.com/send?phone=5511910518642&text=Converse%20comigo%20usando%20este%20link.%20Link%20usado%20no%20meu%20portfolio%20para%20que%20consigam%20entrar%20em%20contato%20comigo%20mais%20facilmente."
                target="_blank"
                >
                
                <BsWhatsapp size={28}/> 
              </a>
            </div>
          </section>
          <div className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-screen-xl w-full flex flex-col gap-12">
            <section>
              <div className="w-full flex">
                <h2 className="font-bold text-2xl w-auto text-center border-bottom-w-1 border-gray-800 dark:border-gray-200 dark:text-gray-200 pb-1">Gabriel Ribeiro Siqueira</h2>
              </div>
              <p className="text-main pt-4 dark:text-gray-200 h-auto">
                Conhecimentos em front-end usando majoritariamente a biblioteca react com a linguagem typescript. Começando a estudar Node, para ter conhecimentos tanto Front-end quanto Back-end.
                Focado atualmente em conseguir uma vaga como programador front-end, porém para o futuro gostaria de trabalhar também na área de back-end.
              </p>
            </section>
            <div className="flex gap-4">
              <Link
                to="projects"
                smooth
                duration={500}
              >
                <Button 
                  text="Projetos" 
                  icon={<ArrowDown size={24}/>}
                />
              </Link>
              <a 
                  href="#about-me"
                >
                  
                </a>
                <a 
                href={"../../public/Certificados.rar"}
                download={"certificados-gabriel-ribeiro-siqueira.rar"}
              >
                 <Button 
                    text="Certificados" 
                    icon={<DownloadSimple size={24}/>}
                    haveAnimation={false}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutMe/>
      <Projects />
    </>
   
  )
}
