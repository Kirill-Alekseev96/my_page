import { useEffect } from 'react';

export function useLockScroll() {
    useEffect(() => {

        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
        };
        
    }, []);
}