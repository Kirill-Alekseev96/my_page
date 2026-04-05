export default function Contact() {
    return (
        <section className="contact">
            <h2 className="contact__heading heading"></h2>
            <p className="contact__description"></p>
            <form className="contact__form" action="">
                <div className="contact__fields">
                    <input className="contact__input" type="text" />
                    <input className="contact__input" type="email" />
                    <textarea className="contact__textarea" name="" id=""></textarea>
                    <button className="contact__submit" type="submit">Отправить</button>
                </div>
            </form>
            <a className="contact__phone" href="tel:+">789825</a>
        </section>
    )
}