import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const YOUR_PUBLIC_KEY:string = 'Wy6_ryLnjhWXKOZ0T';
    const YOUR_SERVICE_ID:string = 'service_ip7eo26';
    const YOUR_TEMPLATE_ID: string = 'template_jgk5mvn';

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (event:React.SyntheticEvent) => {
    event.preventDefault();

    // Устанавливаем текущую дату
        const now = new Date();
        const formattedTime = now.toLocaleString('ru-RU');
        form.current!.time.value = formattedTime;

    emailjs
        .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current!, {
            publicKey: YOUR_PUBLIC_KEY,
        })
        .then(
            () => {
            console.log('SUCCESS!');
            form.current!.reset();
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <section className="contact">
            <h2 className="contact__heading heading">qw</h2>
            <p className="contact__description">qw</p>
            <form id="contact-form" className="contact__form" ref={form} onSubmit={sendEmail}>
                <input type="hidden" name="time" value="Mar 10 2025 08:46"/>
                <label>Имя</label>
                <input type="text" name="name" required/>
                <label>Почта</label>
                <input type="email" name="email" required/>
                <label>Заголовок</label>
                <input type="text" name="title" required/>
                <label>Сообщение</label>
                <textarea name="message" required></textarea>
                <input type="submit" value="Отправить"/>
            </form>
            <a className="contact__phone" href="tel:+79506874336">+7(950)-687-43-36</a>
        </section>
    )
}