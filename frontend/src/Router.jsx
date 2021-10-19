import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import SignUp from './containers/SignUp';
import Signin from './containers/Signin';
import ThankYou from './containers/ThankYou';


const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/SignUp'} component={SignUp} />
                <Route exact path={'/Signin'} component={Signin} />
                <Route exact path={'/ThankYou'} component={ThankYou} />
            </Switch>
        </>
    );
};
export default Router;
