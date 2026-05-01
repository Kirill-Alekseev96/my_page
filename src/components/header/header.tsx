import { NavLink } from "react-router-dom";
import { PAGES } from "../../const";

type HeaderProps = {
    toggleTheme: () => void;
};

export default function Header ({toggleTheme}: HeaderProps) {

    type NavLinkProps = {
        isActive: boolean;
    };

    const getLinkClassName = ({ isActive }:NavLinkProps) => 
    `header__link ${isActive ? 'header__link--active' : ''}`;

    return (
        <header className="header">
            <div className="header__container">
                <img className="header__logo" src="/my_page/images/LOGO.png" alt="Logo" />
                
                <nav className="header__nav">
                    <ul className="header__list">

                        {PAGES.map((page) => (
                             <li className="header__item">
                                <NavLink className={getLinkClassName} to={page.path}>{page.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                
                <button onClick = {toggleTheme} className="header__theme-btn button--dark"></button>
            </div>
        </header>
    )
}