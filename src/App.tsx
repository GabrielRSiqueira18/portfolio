import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "next-themes"
import { Router } from "./Router"
import { ProjectsContextProvider } from "./context/ProjectsContext"
export function App() {

  return (
    <>
			<ThemeProvider attribute="class">
				<ProjectsContextProvider>
					<BrowserRouter>
						<Router/>
					</BrowserRouter>
				</ProjectsContextProvider>
			</ThemeProvider>
    </>
   
  )
}
