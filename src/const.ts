enum AppRoute {
    Home = '/',
    Skills = '/Skills',
    Portfolio = '/Portfolio',
}

const PAGES = [
    { name: 'Главная', path: AppRoute.Home },
    { name: 'Навыки', path: AppRoute.Skills },
    { name: 'Проекты', path: AppRoute.Portfolio },
];

const ROLE = 'Разработчик';

export { AppRoute, PAGES, ROLE }