import { useCallback, useEffect, useState } from "react";
import MemorizedContact from "../contact/contact";
import { ROLE } from "../../const";
import { runHomeAnimations } from './split';
import MemorizedSocial from "../social/social";
import { useTypingAnimation } from "../../hooks/useTypingAnimation";

export default function Home () {

    const [isOpenContact, setIsOpenContact] = useState(false);

    const currentText = useTypingAnimation(ROLE, isOpenContact);

    useEffect(() => {
        runHomeAnimations();
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
                        <MemorizedSocial/>
                    </div>
                </div>
                <div className="home__inner">
                    <img className="home__image" src='/my_page/images/IMG_4786.png' alt="zxcc" />
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