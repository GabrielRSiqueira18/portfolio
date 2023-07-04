import { ReactNode, createContext } from "react";

interface ProjectsContextProviderProps {
	children: ReactNode
}

interface Libs {
	name: string
	description: string
}

interface Projects {
	id : number
	name: string
	imgUrl: string
	linkSite: string
	linkGithub: string
	type: 'front-end' | 'back-end'
	libs: Libs[]
}

interface ProjectsContextType {
	projects: Projects[]
}

const projects: Projects[] = [
	{
		id: 0,
		name: "coffe-delivery",
		imgUrl: "coffe-img",
		linkSite: "https://coffe-delivery-desafio-2-final-version-rocktseat.vercel.app/#/",
		linkGithub: "https://github.com/GabrielRSiqueira18/project-front_end-course-rocketseat-challange-coffee_delivery",
		type: "front-end",
		libs: [
			{
				name: 'zod',
				description: 'validar formulários',
			},
			{
				name: 'styled-components',
				description: 'Criar componentes já estilizados',
			},
			{
				name: 'immer',
				description: 'Facilitar as alterações do useReduzer() facilitando as alterações dos estados',
			},
			{
				name: 'date-fns',
				description: 'Usar datas e manipular de uma forma mais simples',
			}
		]
	},
	{
		id: 1,
		name: "country-api",
		imgUrl: "country-img",
		linkSite: "https://country-api-lac.vercel.app/",
		linkGithub: "https://github.com/GabrielRSiqueira18/project-front_end-personal-country_api",
		type: "front-end",
		libs: [
			{
				name: 'axios',
				description: 'Realizar requisões http com mais facilidade',
			},
			{
				name: 'styled-components',
				description: 'Criar componentes já estilizados',
			},
		]
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