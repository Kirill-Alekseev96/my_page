enum AppRoute {
    Home = '/Home',
    Skills = '/Skills',
    Portfolio = '/Portfolio',
}

const PAGES = [
    { name: 'Главная', path: AppRoute.Home },
    { name: 'Навыки', path: AppRoute.Skills },
    { name: 'Проекты', path: AppRoute.Portfolio },
];

export { AppRoute, PAGES }