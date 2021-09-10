import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home />

                    </Route>
                    <Route path="/dashboard" >
                        <Dashboard />
                        <Home />

                    </Route>

                </Switch>
            
            </BrowserRouter>
        </div>
    );
}
    export default Routes;
