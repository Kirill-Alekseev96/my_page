export default function Social () {

    return (
        <section className="social">
            <ul className="social__list">
                <li className="social__item">
                    <a className="social__link" href="tel:+79506874336">
                        <button className="social__phone-svg button-icon"></button>
                    </a>
                </li>
                <li className="social__item">
                    <a className="social__link" href="https://github.com/Kirill-Alekseev96">
                        <button className="social__github-svg button-icon"></button>
                    </a>
                </li>
                <li className="social__item">
                    <a className="social__link" href="https://vk.com/alekseevkirill7">
                        <button className="social__vk-svg button-icon"></button>
                    </a>
                </li>
                <li className="social__item">
                    <a className="social__link" href="https://web.telegram.org/k/#@ind1go3">
                        <button className="social__telegram-svg button-icon"></button>
                    </a>
                </li>
            </ul>
        </section>
    )
}