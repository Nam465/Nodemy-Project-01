import routers from "./router"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import AuthGuard from "./components/authGuard"
import { AuththenticateProvider } from "./context/authenticate"
import React from "react"

const generateRoutes = (routers) => {
    return routers.map((route, index) => {
        // Private Router
        if (route.auth == true) {
            return (
                <Route key={route.key} exact={route.exact} path={route.path}>
                    <AuthGuard>{route.component}</AuthGuard>
                </Route>
            )
        }

        // Public Router
        if (route.auth == false)
            return (
                <Route key={route.key} exact={route.exact} path={route.path}>
                    {route.component}
                </Route>
            )
    })
}

function App() {

    const [authenticate, setAuthenticate] = React.useState(null)
    const [loadingAuthen, setLoadingAuthen] = React.useState(true)

    React.useEffect(() => {
        getAuthenticate()
    }, [])

    const getAuthenticate = () => {
        const user = localStorage.getItem('user')
        if (user) {
            setAuthenticate(JSON.parse(user))
        }
        setLoadingAuthen(false)
    }

    if (loadingAuthen == true) return <div></div>

    return (
        <div>
            <AuththenticateProvider value={[authenticate, setAuthenticate]}>
                <Router>
                    <Switch>{generateRoutes(routers)}</Switch>
                </Router>
            </AuththenticateProvider>
        </div>
    )
}

export default App
