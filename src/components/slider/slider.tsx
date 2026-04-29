import 'swiped-events';
import { useCallback, useEffect, useState } from "react";
import type { PortfolioDataType } from '../../types/type-data';
import { useLockScroll } from '../../hooks/useLockScroll';
import { useEscapeClose } from '../../hooks/useEscapeClose';

interface SliderProps {
  project: PortfolioDataType;
  onClose: () => void;
}

export default function Slider ({project, onClose}:SliderProps) {


    

    const [slideIndex, setSlideIndex] = useState(0);

    const {images, fullDescription, link} = project;

    const slideCount = images.length;

    useLockScroll();
    useEscapeClose(onClose);

    // Функция для показа предыдущего слайда
    const showPreviousSlide = useCallback(() => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
    }, [slideCount]);

    // Функция для показа следующего слайда
    const showNextSlide = useCallback(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, [slideCount]);

    useEffect(() => {

        if (!project) return;

        const element = document.querySelector('.slider__container-wrapper');
        if (!element) return;

        const handleSwipeLeft = () => showNextSlide();  
        const handleSwipeRight = () => showPreviousSlide(); 

        element?.addEventListener('swiped-left', handleSwipeLeft);
        element?.addEventListener('swiped-right', handleSwipeRight);

        return () => {
            element?.removeEventListener('swiped-left', handleSwipeLeft);
            element?.removeEventListener('swiped-right', handleSwipeRight);
        }

    },[showNextSlide, showPreviousSlide, project]);
    
    return(
        <div className="slider">

             <div className="slider__container">
                <div className="slider__container-inner">

                    <div className="slider__counter">
                        <span className="slider__counter-current">{slideIndex + 1}</span>
                        <span className="slider__counter-separator">/</span>
                        <span className="slider__counter-total">{slideCount}</span>
                    </div>

                    <div className="slider__container-wrapper">

                        {images.map((image, index)=>(
                            <img className="slider__image" 
                                key={index}
                                src={image.src} 
                                alt={image.alt} 
                                style={{ display: index === slideIndex ? 'block' : 'none' }}
                            />
                        ))}
                        <button onClick = {onClose} className="slider__close-button" aria-label="закрыть"></button>
                        <div className="slider__container-button">
                            <button onClick = {showPreviousSlide} className="prev__button slider__button" aria-label="Посмотреть предыдущий слайд"></button>
                            <button onClick = {showNextSlide} className="next__button slider__button" aria-label="Посмотреть следующий слайд"></button>
                        </div>
                    </div>  
                    <p className="slider__description-full">{fullDescription}</p> 
                    <a className='slider__link' href={link}>сcылка на проект</a> 
                </div>
            </div>

        </div>
    )
}