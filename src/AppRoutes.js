import WelcomeContent from "./views/Welcome/container/WelcomeContent";
import Search from "./views/Search/Search";
import Categories from "./views/Categories/Categories";
import MovieDescription from "./views/MovieDescription/MovieDescription";

export default [
    {path: '/categories', component: Categories, exact: true},
    {path: '/search/:search', component: Search, exact: true},
    {path: '/:id', component: MovieDescription, exact: true},
    {path: '/', component: WelcomeContent, exact: true},
];