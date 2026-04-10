export default function Home () {

    return (
        <section className="home">
            <div className="home__content">
                <span className="home__greeting">Привет</span>
                <span className="home__text">Меня зовут Кирилл Алексеев</span>
                <h1 className="home__heading heading">Я Frontend Разработчик</h1>
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
                <img className="home__image" src='/images/phot.jpg' alt="zxcc"/>
            </div>
        </section>
    )
} 