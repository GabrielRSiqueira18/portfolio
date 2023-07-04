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
	type: 'front-end' | 'back-end'
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
		type: "front-end",
	},
	{
		id: 1,
		name: "Country Api",
		imgUrl: "country-img",
		linkSite: "https://country-api-lac.vercel.app/",
		linkGithub: "https://github.com/GabrielRSiqueira18/project-front_end-personal-country_api",
		type: "front-end",
	}
]

export const ProjectsContext = createContext({} as ProjectsContextType)

export function ProjectsContextProvider({ children }: ProjectsContextProviderProps) {
	return (
		<ProjectsContext.Provider value={{ projects }}>
			{children}
		</ProjectsContext.Provider>
	)
}