// import Splide from '@splidejs/splide';
// import "@splidejs/splide/css";
// // import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

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


    // new Splide( '.splide' ).mount();
    // const splide = new Splide( '.splide', {
    //     type   : 'loop',
    //     drag   : 'free',
    //     focus  : 'center',
    //     perPage: 3,
    //     autoScroll: {
    //         speed: 1,
    //     },
    // } );

    // splide.mount();


    return(
        <section className="projects">
            <h2 className="projects__heading heading">Проекты</h2>


            <div className="splide" role="group" aria-label="Splide Basic HTML Example">
                <div className="splide__track">
                        <ul className="splide__list">

                            {projectsData.map((project) => (

                                <li className="splide__slide" key={project.id}>
                                    <img className="projects__image" onClick = {() => handleOpenSlider(project.id)} src={project.previewImage} alt={project.title}/>
                            
                                    <div className="projects__content">
                                        <h3 className="projects__title">{project.title}</h3>
                                        <p className="projects__description">{project.description}</p>
                                    </div>
                                </li>                          
                            
                            ))}
                        </ul>
                </div>
            </div>
                
            {isOpenSlider && <Slider 
                project = {project}
                onClose = {handleCloseSlider}
            />}

        </section>
    )
}