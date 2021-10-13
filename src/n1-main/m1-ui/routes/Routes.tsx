import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Login from '../t1-login/Login'
import Register from '../t2-register/Register'
import Profile from '../t3-profile/Profile'
import Error404 from '../t4-404/Error404'
import ResetPassword from '../t5-resetPassword/ResetPassword'
import NewPassword from '../t6-newPasswors/NewPassword'
import Preview from '../t7-preview/Preview'

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    RESET_PASSWORD: '/reset-password',
    NEW_PASSWORD: '/new-password',
    PREVIEW: '/preview'
}

function Routes() {
    return (
        <div>
            <Switch>

                <Route path={'/'} exact render={() => <Redirect to={PATH.PREVIEW} />} />

                <Route path={PATH.LOGIN} render={() => <Login />} />
                <Route path={PATH.REGISTER} render={() => <Register />} />
                <Route path={PATH.PROFILE} render={() => <Profile />} />
                <Route path={PATH.RESET_PASSWORD} render={() => <ResetPassword />} />
                <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword />} />
                <Route path={PATH.PREVIEW} render={() => <Preview />} />

                <Route render={() => <Error404 />} />

            </Switch>
        </div>
    )
}

export default Routes
