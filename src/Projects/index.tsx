import { ArrowCircleDown } from "phosphor-react";
import { Button } from "../components/Button";
import { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";

export function Projects() {
	const { projects } = useContext(ProjectsContext)

  return (
    <div id="projects" className="flex justify-center items-center w-full shadow-lg h-full">
      <div className="w-full h-full mt-33 bg-gray-50 shadow-2xl dark:bg-gray-800 pb-20">
        <div className="max-w-7xl w-full m-auto p-4">
          <h2 className="text-center font-bold text-gray-800 dark:text-gray-200 mt-8 text-3xl tracking-widest">PROJETOS</h2>
          <div className="rounded-2xl flex m-auto justify-center mt-4 mb-4 text-gray-800 dark:text-gray-200">
            <ArrowCircleDown size={32} weight="fill" />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 p-2 md:flex md:flex-col">

						{projects.map(project => {
							return (
								<div key={project.id} className="bg-gray-100 dark:bg-gray-900 rounded-md shadow-2xl p-4">
									<h2 className="text-gray-800 dark:text-gray-100 text-base font-normal text-center">{project.name}</h2>
									<div  className="flex gap-4 m-auto justify-center mt-4">
										<a target="_blank" href={project.linkSite} className="border-w-1 border-transparent bg-gray-100 dark:bg-gray-900 rounded-lg font-bold dark:text-gray-200 dark:hover:bg-transparent dark:hover:border-gray-600 transition dark:hover:text-gray-400 text-gray-800 hover:text-gray-500 hover:bg-transparent hover:border-gray-400 p-2 flex gap-1 justify-center items-center button-to-next-step overflow-hidden shadow-lg cursor-pointer">Link do site</a>
										<a target="_blank" href={project.linkGithub} className="border-w-1 border-transparent bg-gray-100 dark:bg-gray-900 rounded-lg font-bold dark:text-gray-200 dark:hover:bg-transparent dark:hover:border-gray-600 transition dark:hover:text-gray-400 text-gray-800 hover:text-gray-500 hover:bg-transparent hover:border-gray-400 p-2 flex gap-1 justify-center items-center button-to-next-step overflow-hidden shadow-lg cursor-pointer">Link Github</a>
									</div>
									<div className="mt-4">
										<div className={`h-96 bg-${project.imgUrl} bg-cover bg-default-all-img bg-no-repeat hover:bg-cofee bg-gray-200 dark:bg-gray-950`}>
										</div>
									</div>

								</div>
							)
						})}

            
           
            
          </div>
          <Button className="ml-2" text="Outros projetos"/>
        </div>
      </div>
    </div>
  )
}