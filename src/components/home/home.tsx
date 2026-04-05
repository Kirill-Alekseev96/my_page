export default function Home () {
    return (
        <section className="home">
            <div className="home__content">
                <h1 className="home__heading heading">Frontend Разработчик</h1>
                <p className="home__description">Меня зовут Кирилл Алексеев, я frontend-разработчик создаю удобные и современные интерфейсы. Моя задача — превращать идеи в чистый, работающий код, который приносит пользу. Постоянно учусь новому и слежу за трендами, чтобы делать веб лучше и быстрее.</p>
                <div className="home__actions">
                    <button className="home__button--download button">cкачать</button>
                    <button className="home__button--contact button">написать</button>
                </div>
            </div>
            <div className="home__inner">
                <img className="home__image" src='/images/photo.jpg' alt="zxcc"/>
            </div>
        </section>
    )
} 