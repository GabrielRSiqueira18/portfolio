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
	type: 'front-end' | 'backend'
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
				name: 'Zod',
				description: 'validar formulários',
			},
			{
				name: 'Styled-components',
				description: 'Criar componentes já estilizados',
			},
			{
				name: 'Immer',
				description: 'Facilitar as alterações do useReduzer() facilitando as alterações dos estados',
			},
			{
				name: 'Date-fns',
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
				name: 'Axios',
				description: 'Realizar requisões http com mais facilidade',
			},
			{
				name: 'Styled-components',
				description: 'Criar componentes já estilizados',
			},
		]
	},
	{
		id: 1,
		name: "Api Meals",
		imgUrl: "",
		linkSite: "",
		linkGithub: "https://github.com/GabrielRSiqueira18/ignite-challange-meals-02/tree/main",
		type: "backend",
		libs: [
			{
				name: 'Fastify',
				description: 'Micro-framework para melhorar a criar um servidor http e usar requisões como um todo.',
			},
			{
				name: 'Knex',
				description: 'QueryBuilder para usar banco de dados como mais facilidades.',
			},
			{
				name: 'Zod',
				description: 'validar dados da aplicação.',
			},
		]
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