import { useEffect, useRef, useState } from 'react';

export const useTypingAnimation = (text: string, isPaused: boolean) => {
    const [currentText, setCurrentText] = useState('');
    const textRef = useRef('');
    const countRef = useRef(0);

        useEffect(() => {

        let timeoutId: number;
        let isDeleting = false;

        const textAr = text.split('');

        const animate = () => {

            if(isPaused) return;

            if (!isDeleting) {
                // Режим печати
                if (countRef.current < textAr.length) {
                    textRef.current += textAr[countRef.current];
                    setCurrentText(textRef.current);
                    countRef.current++;
                    timeoutId = setTimeout(animate, 100);
                } else {
                    // Завершили печать, ждём 2 секунды и начинаем удаление
                    isDeleting = true;
                    timeoutId = setTimeout(animate, 3000);
                }
            } else {
                // Режим удаления
                if (textRef.current.length > 0) {
                    textRef.current = textRef.current.slice(0, -1);
                    setCurrentText(textRef.current);
                    timeoutId = setTimeout(animate, 100);
                } else {
                    isDeleting = false;
                    countRef.current = 0;
                    timeoutId = setTimeout(animate, 3000);
                }
            }
        };
        
        animate();

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [isPaused]);

    return currentText;
};