import { useEffect, useState } from "react";
import Contact from "../contact/contact";

export default function Home () {

    const [isOpenContact, setIsOpenContact] = useState(false);
    const [currentText, setCurrentText] = useState('');
    const text = 'Разработчик';


    useEffect(() => {
        let count = 0;
        let timeoutId;
        let isMounted: boolean = true; // флаг монтирования

        const animate = () => {
            console.log(count);
            console.log(currentText);
            if (!isMounted) return;
            
            if (count < text.length) {
                setCurrentText(prev => prev + text[count]);
                console.log('Adding:', text[count], 'Result:', currentText);
                count = count + 1;
                timeoutId = setTimeout(animate, 120);
            } else {
                timeoutId = setTimeout(() => {
                    if (!isMounted) return;
                    setCurrentText('');
                    count = 0;
                    animate();
                }, 2000);
            }   
        }

        setCurrentText('');
        count = 0;
        animate();

        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
        }

    },[]);


    


    const handleOpenContact = () => {
        setIsOpenContact(!isOpenContact);
    }

    const handleCloseContact = () => {
        setIsOpenContact(!isOpenContact);
    }

    return (
        <section className="home">
            <div className="home__content">
                <span className="home__greeting">Привет</span>
                <span className="home__text">Меня зовут Кирилл Алексеев</span>
                <h1 className="home__heading heading">Я Frontend {currentText}</h1>
                <p className="home__description">
                    Cоздаю удобные и современные интерфейсы.
                    Моя задача — превращать идеи в чистый, работающий код, который приносит пользу.
                    Постоянно учусь новому и слежу за трендами,чтобы делать веб лучше и быстрее.</p>
                <div className="home__actions">
                    <button className="home__button--download button">cкачать</button>
                    <button onClick = {handleOpenContact} className="home__button--contact button">написать</button>
                </div>
            </div>
            <div className="home__inner">
                <img className="home__image" src='/images/IMG_4786-Photoroom.png' alt="zxcc"/>
            </div>

            {isOpenContact && 
                        <>
                            <div className="slider-backdrop" onClick={handleCloseContact} />
                            <Contact/>
                        </>}
        </section>
    )
} 