import { useRef } from 'react';
import emailjs from '@emailjs/browser';

type ContactType = {
  handleCloseContact: () => void;
};
export default function Contact({handleCloseContact}:ContactType) {
    
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
            handleCloseContact();
            form.current!.reset();
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <section className="contact">
            <h2 className="contact__heading heading">Письмо</h2>
            <p className="contact__description">отправить мне сообщение</p>
            <form id="contact__form" className="contact__form" ref={form} onSubmit={sendEmail}>
                <input type="hidden" name="time" />
                <div className='contact__container-inner'>
                    <label className='contact__label'>Имя</label>
                    <input className = 'contact__input' type="text" name="name" required/>
                </div>

                <div className='contact__container-inner'>
                    <label className='contact__label'>Почта</label>
                    <input className = 'contact__input' type="email" name="email" required placeholder="Ваша почта@mail.com"/>
                </div>

                <div className='contact__container-inner'>
                    <label className='contact__label'>Заголовок</label>
                    <input className = 'contact__input' type="text" name="title" required/>
                </div>
            
                <div className='contact__container-inner'>
                    <label className='contact__label'>Сообщение</label>
                    <textarea name="contact__message" required></textarea>
                </div>
               
                <input className = 'contact__input button' type="submit" value="Отправить"/>
            </form>
        </section>
    )
}