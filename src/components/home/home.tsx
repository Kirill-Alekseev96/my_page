import { useEffect, useState } from "react";

export default function Home () {

    const [currentText, setCurrentText] = useState('');
    const [count, setCount] = useState(0);
    const text = 'Разработчик';

    useEffect (() => {
        console.log(text.split(''))

        const interval = setInterval(() => {
            if(count < text.length) {
                setCurrentText(prev => prev + text[count]);
                setCount(prev => prev + 1); // prev - это актуальное значение

            }else{
                clearInterval(interval);
                setTimeout(() => {
                    setCurrentText('');
                    setCount(0);
                }, 2000);
        
            }
        }, 120)

        return () => clearInterval(interval); 
    },[count]);

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
                    <button className="home__button--contact button">написать</button>
                </div>
            </div>
            <div className="home__inner">
                <img className="home__image" src='/images/IMG_4786-Photoroom.png' alt="zxcc"/>
            </div>
        </section>
    )
} 