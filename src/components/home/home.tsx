import { useCallback, useEffect, useRef, useState } from "react";
import MemorizedContact from "../contact/contact";
import { ROLE } from "../../const";
import { runHomeAnimations } from './split';

export default function Home () {

    const [isOpenContact, setIsOpenContact] = useState(false);
    const [currentText, setCurrentText] = useState('');
    const textRef = useRef('');
    const countRef = useRef(0);

    useEffect(() => {
        runHomeAnimations();
    }, []);

    useEffect(() => {

        let timeoutId: number;
        let isDeleting = false;

        const textAr = ROLE.split('');

        const animate = () => {
            if (!isDeleting) {
                // Режим печати
                if (countRef.current < textAr.length) {
                    textRef.current += textAr[countRef.current];
                    setCurrentText(textRef.current);
                    countRef.current++;
                    timeoutId = setTimeout(animate, 100);
                } else {
                    // Завершили печать, ждём 2 секунды и начинаем удаление
                    isDeleting = true;
                    timeoutId = setTimeout(animate, 3000);
                }
            } else {
                // Режим удаления
                if (textRef.current.length > 0) {
                    textRef.current = textRef.current.slice(0, -1);
                    setCurrentText(textRef.current);
                    timeoutId = setTimeout(animate, 100);
                } else {
                    isDeleting = false;
                    countRef.current = 0;
                    timeoutId = setTimeout(animate, 3000);
                }
            }
        };
        
        animate();

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);
    


    const handleOpenContact = useCallback(() => {
        setIsOpenContact(true);
    },[]);

    const handleCloseContact = useCallback(() => {
        setIsOpenContact(false);
    }, []);

    return (
    <>
        {!isOpenContact ? (
            <section className="home">
                <div className="home__content">
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
                        <a className="home__phone" href="tel:+79506874336">
                            <div className="home__phone-svg"></div>
                        </a>
                    </div>
                </div>
                <div className="home__inner">
                    <img className="home__image" src='/images/IMG_4786.png' alt="zxcc" />
                </div>
            </section>
        ) : (
            <>
                <div className="slider-backdrop" onClick={handleCloseContact} />
                <MemorizedContact onClose={handleCloseContact}/>
            </>
        )}
    </>
);
} 