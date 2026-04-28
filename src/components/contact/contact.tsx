import { memo, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Example } from '../spinner/spinner-form';
import { useLockScroll } from '../../hooks/useLockScroll';

type ContactType = {
  onClose: () => void;
};
function Contact({onClose}:ContactType) {
    
    const [isLoading, setIsLoading] = useState(false); 
    

    const YOUR_PUBLIC_KEY:string = 'Wy6_ryLnjhWXKOZ0T';
    const YOUR_SERVICE_ID:string = 'service_ip7eo26';
    const YOUR_TEMPLATE_ID: string = 'template_jgk5mvn';

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (event:React.SyntheticEvent) => {
        event.preventDefault();
        setIsLoading(true);

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
            onClose();
            form.current!.reset();
        })
        .catch((error) => {
            console.log(error.message);
        })
        .finally(() => {
            setIsLoading(false); 
        });
    };

    useLockScroll();

    return (
        <section className="contact">
            <div className="contact__container">
                <form id="contact__form" className="contact__form" ref={form} onSubmit={sendEmail}>
                    <h2 className="contact__heading visually-hidden">Письмо</h2>
                    <p className="contact__description">отправить мне сообщение</p>
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
                        <textarea className='contact__message' name="message" required></textarea>
                    </div>
                    <button onClick = {onClose} className="contact__close-button" aria-label="закрыть"></button>
                    <div  className='contact__container-wrap'>
                        {isLoading && <Example/>}
                        <input className = 'contact__button button' type="submit" value={isLoading ? "Отправка..." : "Отправить"} disabled={isLoading}/>
                    </div>
                   
                </form>
            </div>
        </section>
    )
}

const MemorizedContact = memo(Contact);

export default MemorizedContact;