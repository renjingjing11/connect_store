// 一级路由
import Home from "../views/home";
import Connect from "../views/home/connect/index"
import Store from "../views/store/index"
// 二级路由
import Movie from "../views/home/movie"
import Cinema from "../views/home/cinema"
import My from "../views/home/my"
const routes = [{
    path: "/home",
    component: Home,
    children: [{
        path: "/home/movie",
        component: Movie
    }, {
        path: "/home/cinema",
        component: Cinema
    }, {
        path: "/home/my",
        component: My
    }]
}, {
    path: "/connect",
    component: Connect
}, {
    path: "/store",
    component: Store
}, {
    path: "/",
    redirect: "/connect"
}]
export default routes