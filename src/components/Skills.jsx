import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Habilidades &amp; Tecnologías
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Actualmente sigo aprendiendo y desarrollando mis habilidades.
          </p>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Pulse sobre uno para ver mis certificados
            </p>
        </div>
        
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 hover:bg-primary">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full ">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center ">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <a href={skill.link}><span className="title-font font-medium text-white hover:text-gray-700">
                  {skill.title}
                </span></a>
              </div>
              
            </div>
            
          ))}
        </div>
        
      </div>
    </section>
  );
}