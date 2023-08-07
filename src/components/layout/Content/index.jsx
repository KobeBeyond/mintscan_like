import { Route, Switch, Redirect } from 'react-router-dom'
import getRoutes from "../../routes"
function Content (props) {
    const routes = getRoutes()
    return (
        <>
            <Switch>
                {routes.map(item => {
                    return (
                        <Route
                            key={item.path}
                            path={item.path}
                            exact={item.exact}
                            render={props =>
                                <item.component {...props} />
                            }
                        />
                    )
                })}
                <Redirect to='/not-found' />
            </Switch>
        </>
    )
}

export default Content