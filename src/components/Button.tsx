interface ButtonProps {
  text: string
  icon?: JSX.Element
  haveAnimation?: boolean
  className?: string
}



export function Button({ text, icon, className, haveAnimation = true, }: ButtonProps) {
  if(haveAnimation) {
    return (
      <button className={`
      border-w-1 border-transparent bg-gray-100 dark:bg-gray-900 rounded-lg font-bold dark:text-gray-200 dark:hover:bg-transparent dark:hover:border-gray-600 transition dark:hover:text-gray-400 text-gray-800 hover:text-gray-500 hover:bg-transparent hover:border-gray-400 p-2 flex gap-1 justify-center items-center button-to-next-step overflow-hidden shadow-lg ${className} 
    `}>
        {text} {icon}
      </button>
    )
  } else {
      return (
        <button className={`
        border-w-1 border-transparent bg-gray-100 dark:bg-gray-900 rounded-lg font-bold dark:text-gray-200 dark:hover:bg-transparent dark:hover:border-gray-600 transition dark:hover:text-gray-400 text-gray-800 hover:text-gray-500 hover:bg-transparent hover:border-gray-400 p-2 flex gap-1 justify-center items-center shadow-lg ${className} 
      `}>
          {text} {icon}
        </button>
      )
  }

  
}