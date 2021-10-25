import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import SignUp from './containers/SignUp';
import Signin from './containers/Signin';
import ThankYou from './containers/ThankYou';
import Cart from './containers/Cart';
import Items from './containers/Items';
import Shipping from './containers/Shipping';



const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/SignUp'} component={SignUp} />
                <Route exact path={'/Signin'} component={Signin} />
                <Route exact path={'/ThankYou'} component={ThankYou} />
                <Route exact path={'/home'} component={Home} />
                <Route exact path={'/Cart'} component={Cart}/>
                <Route exact path={'/Items'} component={Items}/>
                <Route exact path={'/Shipping'} component={Shipping}/>



            </Switch>
        </>
    );
};
export default Router;
