import { ReactNode, createContext } from "react";

interface ProjectsContextProviderProps {
	children: ReactNode
}

interface Projects {
	id : number
	name: string
	imgUrl: string
	linkSite: string
	linkGithub: string
}

interface ProjectsContextType {
	projects: Projects[]
}

const projects: Projects[] = [
	{
		id: 0,
		name: "Coffe Delivery",
		imgUrl: "coffe-img",
		linkSite: "https://coffe-delivery-desafio-2-final-version-rocktseat.vercel.app/#/",
		linkGithub: "https://github.com/GabrielRSiqueira18/project-front_end-course-rocketseat-challange-coffee_delivery",
	},
	{
		id: 1,
		name: "Country Api",
		imgUrl: "country-img",
		linkSite: "https://countries-api-weld-nine.vercel.app/",
		linkGithub: "https://github.com/GabrielRSiqueira18/project-front_end-personal-country_api",
	},
	{
		id: 2,
		name: "Todo List",
		imgUrl: "todo-list-img",
		linkSite: "https://todo-list-rocktseat-desafio-1-v2.vercel.app/",
		linkGithub: "https://github.com/GabrielRSiqueira18/project-front_end-course-rocketseat-challange-todo_list",
	},
]

export const ProjectsContext = createContext({} as ProjectsContextType)

export function ProjectsContextProvider({ children }: ProjectsContextProviderProps) {
	return (
		<ProjectsContext.Provider value={{ projects }}>
			{children}
		</ProjectsContext.Provider>
	)
}