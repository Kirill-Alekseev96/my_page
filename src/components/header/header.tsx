export default function Header () {
    return (
        <header className="header">
            <div className="header__container">
                <img className="header__logo" src="" alt="Logo" />
                
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item">
                            <a className="header__link header__link--active" href="">Главная</a>
                        </li>
                        <li className="header__item">
                            <a className="header__link" href="">Навыки</a>
                        </li>
                        <li className="header__item">
                            <a className="header__link" href="">Проекты</a>
                        </li>
                        <li className="header__item">
                            <a className="header__link" href="">Опыт</a>
                        </li>
                        <li className="header__item">
                            <a className="header__link" href="">Контакты</a>
                        </li>
                    </ul>
                </nav>
                
                <button className="header__theme-btn button button--dark"></button>
            </div>
        </header>
    )
}