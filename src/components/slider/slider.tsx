import { useState } from "react";
import type { projectsDataType } from "../../types/type-data";

interface SliderProps {
  project: projectsDataType | null;
}

export default function Slider ({project}:SliderProps) {

    const [slideIndex, setSlideIndex] = useState(0);

    if (!project) {
        return null;
    }

    const {images, fullDescription} = project;

    const slideCount = images.length;

    // Функция для показа предыдущего слайда
    function showPreviousSlide() {
    setSlideIndex((slideIndex - 1 + slideCount) % slideCount);
    }

    // Функция для показа следующего слайда
    function showNextSlide() {
    setSlideIndex((slideIndex + 1) % slideCount);
    }

    
    return(
        <div className="slider">

             <div className="slider__container">
                <div className="slider__container-inner">

                    {images.map((image, index)=>(
                        <img className="slider__image" 
                            src={image.src} 
                            alt={image.alt} 
                            style={{ display: index === slideIndex ? 'block' : 'none' }}
                        />
                    ))}
    
                </div>
                <p className="slider__description-full">{fullDescription}</p>
                <div className="slider__container-button">
                    <button onClick = {showPreviousSlide} className="prev__button slider__button" aria-label="Посмотреть предыдущий слайд"></button>
                    <button onClick = {showNextSlide} className="next__button slider__button" aria-label="Посмотреть следующий слайд"></button>
                </div>
            </div>

        </div>
    )
}