import type { PortfolioDataType } from "../types/type-data";

export const projectsData: PortfolioDataType[] = [
  {
    id: '1',
    title: 'HTML/CSS',
    description: 'Вёрстка и стилизация',
    previewImage: 'public/images/preview_html-css.jpg',
    images: [
      { 
        src: 'public/images/HTML_CSS_1.png',
        alt: 'Главная страница сайта на десктопе',
      },
      { 
        src: '/images/HTML_CSS_2.png',
        alt: 'Мобильная адаптация сайта',
      },
      { 
        src: 'public/images/HTML_CSS_3.png',
        alt: 'Планшетная версия интерфейса',
      }
    ]
  },
  {
    id: '2',
    title: 'JS',
    description: 'Интерактивность и логика',
    previewImage: '/images/preview_js.jpg',
    images: [
      { 
        src: 'public/images/inst_1.png',
        alt: 'Главная страница сайта на десктопе',
      },
      { 
        src: 'public/images/inst_2.png',
        alt: 'Мобильная адаптация сайта',
      },
      { 
        src: 'public/images/inst_3.png',
        alt: 'Планшетная версия интерфейса',
      }
    ]
  },
  {
    id: '3',
    title: 'JS + REACT + TS',
    description: 'Компонентный подход и типизация',
    previewImage: '/images/preview_html-css.jpg',
    images: [
      { 
        src: 'public/images/HTML_CSS_1.png',
        alt: 'Главная страница сайта на десктопе',
      },
      { 
        src: 'public/images/HTML_CSS_2.png',
        alt: 'Мобильная адаптация сайта',
      },
      { 
        src: 'public/images/HTML_CSS_3.png',
        alt: 'Планшетная версия интерфейса',
      }
    ]
  }
]