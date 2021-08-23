import Homepage from "./pages/homepage";
import Login from "./pages/login";
import ShortLink from './pages/short-link'

const routers = [
    {   
        key: "homepage",
        path: '/',
        component: <Homepage />,
        auth: true,
        exact: true,
    },
    {
        key: "login",
        path: '/login',
        component: <Login />,
        auth: false,
        exact: true,
    },
    {
        key: "short-link",
        path: '/short-link/:_id',
        component: <ShortLink />,
        auth: false,
        exact: true,
    },
]

export default routers



