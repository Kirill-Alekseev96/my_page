import { useCallback, useState } from "react";
import type { PortfolioDataType } from "../../types/type-data";
import Slider from "../slider/slider";

interface PortfolioProps {
  projectsData: PortfolioDataType[];
}

export default function Portfolio({projectsData}:PortfolioProps) {

    const [isOpenSlider, setIsOpenSlider] = useState(false);
    const [project, setProject] = useState<PortfolioDataType | null>(null);

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

        <>
                {!isOpenSlider ? (<section className="projects">
            <h2 className="projects__heading heading">Проекты</h2>
            <ul className="projects__list">

                {projectsData.map((project) => (
                    <>
                        <li className="projects__item" onClick = {() => handleOpenSlider(project.id)}>
                            <img className="projects__image" src={project.previewImage} alt={project.title}/>
                    
                            <div className="projects__content">
                                <h3 className="projects__title">{project.title}</h3>
                                <p className="projects__description">{project.description}</p>
                            </div>
                        </li>
                    </>
                ))}
                
            </ul>

        </section>
                    
                ) : (
                    <>
                        <Slider project = {project} onClose={handleCloseSlider}/>
                    </>
                )}
            </>
    )
}