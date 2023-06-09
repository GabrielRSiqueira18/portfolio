import { ArrowCircleDown } from "phosphor-react";
import { SkillButton } from "./components/SkillButtons";

export function AboutMe() {
  return (
    <div id="about-me" className="flex justify-center items-center w-full shadow-lg h-full">
      <div className="w-full h-full mt-33 bg-gray-200 dark:bg-gray-900 pb-20">
        <div className="max-w-7xl w-full m-auto">
          <h2 className="text-center font-bold text-gray-800 dark:text-gray-200 mt-8 text-3xl tracking-widest">SOBRE MIM</h2>
          <div className="rounded-2xl flex m-auto justify-center mt-4 mb-4 text-gray-800 dark:text-gray-200">
            <ArrowCircleDown size={32} weight="fill" />
          </div>
          <p className="text-center w-3/4 m-auto font-normal text-lg text-gray-800 dark:text-gray-200 mb-16">Irei falar um pouco de mim, hard skills, soft skills e tecnologias que tenho conhecimento.</p>
          <div className="flex gap-20 w-full media-about-me p-4">
            <div className="w-full flex flex-col items-center">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Um pouco sobre mim</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-5 w-4/5">
                Desde meu primeiro contato com computadores, com 5 anos, tive grande fascínio por entender o funcionamento de jogos.
                Mas nunca pesquisei ou fui atras para entender essa área de criação da jogos. Porém ao entrar na faculdade vi programação e comecei a entender como funciona essa área, porém preferi focar meu tempo em programação web.
                Atualmente, estou cursando o terceiro semestre de Engenharia da Computação na USF Itatiba e
                tenho me dedicado aos estudos de front-end usando React typescript. Procuro vaga junior/estágio para desenvolvedor front-end usando React. Estou sempre aberto a aprender diferentes tecnologia que não conheço para receber oportunidade de trabalho.
              </p>
            </div>
            <div className="w-full">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center">Skills</h2>
              <div className="flex flex-col gap-8">
                
                <div className="flex flex-col mt-8">
                  <h2 className="mb-4 m-auto font-bold text-xl text-gray-800 dark:text-gray-200">Soft Skills</h2>
                  <div className="flex gap-6 w-full flex-col m-auto">
                    <SkillButton text="Comunicação"/>
                    <SkillButton text="Adaptabilidade"/>
                    <SkillButton text="Trabalho em equipe"/>
                    <SkillButton text="Gerenciamento de tempo"/>
                  </div>
                </div>


                <div className="flex flex-col mt-8">
                  <h2 className="mb-4 m-auto font-bold text-xl text-gray-800 dark:text-gray-200">Hard Skills</h2>
                  <div className="flex gap-6 flex-wrap w-1/2 m-auto">
                    <SkillButton text="Windows/Linux"/>
                    <SkillButton text="Pacote Office"/>
                    <SkillButton text="Inglês básico"/>
                    <SkillButton text="Programação Web"/>
                  </div>
                </div>

                <div className="flex flex-col mt-8">
                  <h2 className="mb-4 m-auto font-bold text-xl text-gray-800 dark:text-gray-200">Tecnologias</h2>
                  <div className="flex gap-3 flex-wrap m-auto">
                    <SkillButton text="HTML5"/>
                    <SkillButton text="CSS3"/>
                    <SkillButton text="Typescript"/>
                    <SkillButton text="React"/>
                    <SkillButton text="NextJs"/>
                    <SkillButton text="Git"/>
                    <SkillButton text="Github"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}