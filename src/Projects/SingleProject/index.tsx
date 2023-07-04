import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ProjectsContext } from "../../context/ProjectsContext"

export function SingleProject() {
	const params = useParams()

	const { name } = params
	
	const { projects } = useContext(ProjectsContext)

	const singleProject = projects.filter(project => name === project.name)[0]

	console.log(singleProject.name)

	return (
		<div id="projects" className="flex justify-center items-center w-full h-full">
			<div className="w-full h-full mt-33">
				
			</div>
		</div>
	)
}