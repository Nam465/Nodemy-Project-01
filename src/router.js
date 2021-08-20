import Homepage from "./pages/homepage";
import Login from "./pages/login";

const routers = [
    {   
        key: "homepage",
        path: '/',
        component: Homepage,
        auth: true,
        exact: true,
    },
    {
        key: "login",
        path: '/login',
        component: Login,
        auth: false,
        exact: true,
    },
]

export default routers