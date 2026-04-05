export default function Skills () {
    return (
        <section className="skills">
            <h2 className="skills__heading heading">Навыки</h2>
            <ul className="skills__list">
                <li className="skills__item">
                    <img src="public/icons/html.svg" alt="HTML/CSS" className="skills__svg" />
                    <h3 className="skills__title">HTML/CSS</h3>
                    <ul className="skills__list-inner">
                        <li className="skills__item-inner">
                            Семантическая верстка HTML5
                        </li>
                        <li className="skills__item-inner">
                            CSS3 (Flexbox, Grid, анимации)
                        </li>
                        <li className="skills__item-inner">
                            Адаптивная и мобильная верстка
                        </li>
                        <li className="skills__item-inner">
                            Препроцессоры (SCSS/SASS)
                        </li>
                        <li className="skills__item-inner">
                            Методология БЭМ
                        </li>
                    </ul>
                </li>
                <li className="skills__item">
                    <img src="public/icons/brackets.svg" alt="JS/React" className="skills__svg" />
                    <h3 className="skills__title">JavaScript & React</h3>
                    <ul className="skills__list-inner">
                        <li className="skills__item-inner">
                            Основы JavaScript (ES6+)
                        </li>
                        <li className="skills__item-inner">
                            Асинхронность (Promises, async/await)
                        </li>
                        <li className="skills__item-inner">
                            Работа с API (fetch, REST)
                        </li>
                        <li className="skills__item-inner">
                            React (библиотека для интерфейсов)
                        </li>
                        <li className="skills__item-inner">
                            TypeScript
                        </li>
                    </ul>
                </li>
                <li className="skills__item">
                    <img src="public/icons/seting.svg" alt="" className="skills__svg" />
                    <h3 className="skills__title">Инструменты и подходы</h3>
                    <ul className="skills__list-inner">
                        <li className="skills__item-inner">
                            Git (система контроля версий)
                        </li>
                        <li className="skills__item-inner">
                            Webpack/Vite (сборщики)
                        </li>
                        <li className="skills__item-inner">
                            Figma/Photoshop (работа с макетами)
                        </li>
                        <li className="skills__item-inner">
                            VS Code (среда разработки)
                        </li>
                        <li className="skills__item-inner">
                            React DevTools — отладка приложений
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}