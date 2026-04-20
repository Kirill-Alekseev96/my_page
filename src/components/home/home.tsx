import { useEffect, useState } from "react";
import Contact from "../contact/contact";
import { ROLE } from "../../const";

export default function Home () {

    const [isOpenContact, setIsOpenContact] = useState(false);
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
    let count = 0;
    let timeoutId:number;

    const textAr = ROLE.split('');
    let newArray:string[] = [];

    const animate = () => {
        
        if (count < textAr.length) {
            newArray.push(textAr[count]);
            setCurrentText(newArray.join(''));
            count++;
            timeoutId = setTimeout(animate, 150);
        } else {
            timeoutId = setTimeout(() => {

                count = 0;
                newArray = [];  // Очищаем массив
                setCurrentText('');
                animate();
            }, 2000);
        }
    };
    
    animate();

    return () => {

        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    };
}, []);
    


    const handleOpenContact = () => {
        setIsOpenContact(true);
    }

    const handleCloseContact = () => {
        setIsOpenContact(false);
    }

    return (
    <>
        {!isOpenContact ? (
            <section className="home">
                <div className="home__content">
                    <span className="home__greeting">Привет</span>
                    <span className="home__text">Меня зовут Кирилл Алексеев</span>
                    <h1 className="home__heading heading">Я Frontend {currentText}</h1>
                    <p className="home__description">
                        Cоздаю удобные и современные интерфейсы.
                        Моя задача — превращать идеи в чистый, работающий код, который приносит пользу.
                        Постоянно учусь новому и слежу за трендами, чтобы делать веб лучше и быстрее.
                    </p>
                    <div className="home__actions">
                        <button className="home__button--download button">скачать</button>
                        <button onClick={handleOpenContact} className="home__button--contact button">написать</button>
                    </div>
                </div>
                <div className="home__inner">
                    <img className="home__image" src='/images/IMG_4786-Photoroom.png' alt="zxcc" />
                </div>
            </section>
        ) : (
            <>
                <div className="slider-backdrop" onClick={handleCloseContact} />
                <Contact handleCloseContact={handleCloseContact}/>
            </>
        )}
    </>
);
} 