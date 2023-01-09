import React, {useEffect, useState} from "react";
import Home from "./components/Hbody/Home";
import './App.css'
import {connect} from "react-redux";
import {Route, Switch, Link, Redirect} from "react-router-dom";
import Headerthird from "./components/SotibOlish/headerthird";
import users from "./reducer/users";
import SavdoOynasi from "./components/SotibOlish/Sidebar/Savdo/SavdoOynasi/SavdoOynasi";


function App({users}) {

    const [auth,setAuth] = useState(false)
    useEffect(()=>{
        setAuth(users.authEnter)
    },[users.authEnter])

    return (
        <div>
            <div>
                <Switch>
                    <Route path={'/login'} component={Home}/>
                    {
                        auth ? <Route path={'/'}>
                                <Route path={'/headerthird'} component={Headerthird}/>
                            <Route path={'/turliTavar'} component={SavdoOynasi}/>
                            </Route>
                            :<Redirect to={'/login'}/>
                    }
                </Switch>
            </div>
        </div>

    );
}

export default connect((users), {}) (App);
