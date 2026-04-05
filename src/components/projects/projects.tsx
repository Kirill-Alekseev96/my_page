import { useCallback, useState } from "react";
import type { projectsDataType } from "../../types/type-data";
import Slider from "../slider/slider";

interface ProjectsProps {
  projectsData: projectsDataType[];
}

export default function Projects({projectsData}:ProjectsProps) {

    const [isOpenSlider, setIsOpenSlider] = useState(false);
    const [project, setProject] = useState<projectsDataType | null>(null);

    const handleOpenSlider = useCallback((id:string) => {
        setIsOpenSlider(!isOpenSlider);
        const currentProject = projectsData.find(p => p.id === id);

        if (currentProject) {
            setProject(currentProject);
            setIsOpenSlider(true);
        }
    },[isOpenSlider, projectsData])

    const handleCloseSlider = useCallback (() => {
        setIsOpenSlider(false);
        setProject(null);
    },[])


    return(
        <section className="projects">
            <h2 className="projects__heading heading">Проекты</h2>
            <ul className="projects__item">

                {projectsData.map((project) => (
                    <>
                        <li>
                            <img className="projects__image" onClick = {() => handleOpenSlider(project.id)} src={project.previewImage} alt={project.title} width={300} height={300}/>
                    
                            <div className="projects__content">
                                <h3 className="projects__title">{project.title}</h3>
                                <p className="projects__description">{project.description}</p>
                            </div>
                        </li>
                    </>
                ))}
                
            </ul>

            {isOpenSlider && <Slider 
                project = {project}
                onClose = {handleCloseSlider}
            />}

        </section>
    )
}