import { Button } from "../components/Button";

export function ErrorPage() {
  return (
    <div className="flex justify-center items-center w-full shadow-lg">
     <div className="flex justify-center flex-col items-center w-full h-screen pb-20 gap-4">
      <h2 className="text-gray-800 dark:text-gray-100">Página inexistente. Volte para a home!</h2>
        <a href="/">
          <Button 
            text="Voltar para home"
          />
        </a>
     </div>
    </div>
  )
}