import { useTheme } from "next-themes"
import { Moon, Sun } from 'phosphor-react';
import { Link } from "react-scroll";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed w-full z-20">
      <header className="w-full p-4 bg-gray-100 dark:bg-gray-900 shadow-md">
        <div className="max-w-screen-xl m-auto flex justify-between items-center">
          <h2 className="text-gray-800 dark:text-gray-200 text-lg font-bold">Gabriel Ribeiro Siqueira</h2>
          
          <div className="flex gap-4 text-gray-800 dark:text-gray-200">
            <a 
              className="font-bold border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-100" 
              href={"/"} 
            >
              Home
            </a>
            <Link
              to="about-me"
              duration={500}
              smooth
              className="font-bold border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-100 cursor-pointer"
            >
              Sobre mim
            </Link>
            <Link 
              to="projects"
              smooth
              className="font-bold border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-100 cursor-pointer" 
              
            >
              Projetos
            </Link>
            <button 
              className="border border-transparent dark:hover:border-gray-100 hover:border-gray-800 flex items-center justify-center rounded" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <Moon weight="bold" size={24}/> : <Sun weight="bold" size={24}/>}
            </button>
          </div>
        </div>
      </header>
    </div>
      
    
  )
}
