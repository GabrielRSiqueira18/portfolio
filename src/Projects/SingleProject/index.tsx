import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { ProjectsContext } from "../../context/ProjectsContext"
import { Button } from "../../components/Button"
import { ArrowLeft } from "phosphor-react"

export function SingleProject() {
	const params = useParams()

	const { name } = params
	
	const { projects } = useContext(ProjectsContext)

	const singleProject = projects.filter(project => name === project.name)[0]

	const singleProjectName = singleProject.name.replace('-', ' ')

	return (
		<div id="projects" className="flex justify-center items-center p-4 w-full h-full">
			<div className="w-full relative top-36">
				<Link to="/">
					<button className="border-w-1 border-transparent bg-gray-100 dark:bg-gray-900 rounded-lg font-bold dark:text-gray-200 dark:hover:bg-transparent dark:hover:border-gray-600 transition dark:hover:text-gray-400 text-gray-800 hover:text-gray-500 hover:bg-transparent hover:border-gray-400 p-2 flex gap-1 justify-center items-center overflow-hidden shadow-lg">
						<ArrowLeft size={24} />
						Voltar
					</button>
				</Link>
				<div className="w-full flex gap-4 justify-center mb-4">
					<Link target="_blank" to={singleProject.linkGithub}>
						<Button text="Github" />
					</Link>
					<Link target="_blank" to={singleProject.linkSite}>
						<Button text="Deploy" />
					</Link>
				</div>
				<div className="container-header m-auto flex flex-wrap gap-4 h-screen">
					<div className={`bg-${singleProject.imgUrl} h-1/2 w-768 bg-cover bg-default-all-img bg-no-repeat bg-gray-200 dark:bg-gray-950`}></div>
					<div className="w-96">
						<h2 className="capitalize text-center dark:text-gray-200 text-gray-950 text-xl">{singleProjectName}</h2>
						<div className="flex flex-col mt-10 gap-6">
							<h3 className="text-gray-200">Bibliotecas usadas:</h3>
							{singleProject.libs.map(lib => {
								return (
									<div className="">
										<h4 className="capitalize text-gray-200">{lib.name}:</h4>
										<span>{lib.description}</span>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}