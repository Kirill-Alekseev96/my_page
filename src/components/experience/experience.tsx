export default function Experience () {
    return(
        <section className="experience">
            <h2 className="experience__heading heading">Опыт</h2>
            <ul className="experience__list">
                <li className="experience__item">
                    <span className="">Летчик-Космонавт</span>
                    <div className="experience__container-inner">
                        <span className="experience__year">2010-2016</span>
                        <button className="experience__button">+</button>
                    </div>
                </li>
            </ul>
            <div className="experience__modal"></div>
        </section>
    )
}