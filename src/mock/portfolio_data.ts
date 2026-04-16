import type { PortfolioDataType } from "../types/type-data";

export const projectsData: PortfolioDataType[] = [
  {
    id: '1',
    title: 'HTML/CSS',
    description: 'Вёрстка и стилизация',
    previewImage: 'public/images/preview2_html-css.jpg',
    images: [
      { 
        src: '/images/HTML_CSS_1а.png',
        alt: 'Главная страница сайта на десктопе',
      },
      { 
        src: '/images/HTML_CSS_2а.png',
        alt: 'Мобильная адаптация сайта',
      },
      { 
        src: '/images/HTML_CSS_3.png',
        alt: 'Планшетная версия интерфейса',
      }
    ],
    fullDescription: 'Разработана качественная вёрстка по предоставленному макету с соблюдением принципа Pixel Perfect — каждый пиксель точно соответствует дизайн-проекту.',
  },
  {
    id: '2',
    title: 'JS',
    description: 'Интерактивность и логика',
    previewImage: '/images/preview2_js.jpg',
    images: [
      { 
        src: '/images/inst_2.png',
        alt: 'Мобильная адаптация сайта',
      },
      { 
        src: '/images/inst_3.png',
        alt: 'Планшетная версия интерфейса',
      }
    ],
    fullDescription: 'Реализована полноценная интерактивность на ванильном JavaScript (ES6+): динамический DOM, события, состояние через объекты/массивы, localStorage.',
  },
  {
    id: '3',
    title: 'JS + REACT + TS',
    description: 'Компонентный подход и типизация',
    previewImage: '/images/preview2_react.jpg',
    images: [
      { 
        src: '/images/1.png',
        alt: 'Главная страница сайта на десктопе',
      },
      { 
        src: '/images/2.png',
        alt: 'Мобильная адаптация сайта',
      },
      { 
        src: '/images/3.png',
        alt: 'Планшетная версия интерфейса',
      },
      { 
        src: '/images/4.png',
        alt: 'Планшетная версия интерфейса',
      }
    ],
    fullDescription: 'Реализован компонентный подход на React + TypeScript с глобальным состоянием через Redux Toolkit, мемоизацией и типизированными запросами к бэкенду.',
  }
]