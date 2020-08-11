import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserListComponent from "../user/UserListComponent"
import AddUserComponent from "../user/AddUserComponent"
import EditUserComponent from "../user/EditUserComponent"
import ComCodeListComponent from "../user/ComCodeListComponent"
import CodeListComponent from "../user/CodeListComponent"
import TabSampleComponent from "../user/TabSampleComponent"

const AppRouter = () => {
    return(
        <div>
            <BrowserRouter>
            <div style={style}>
            <Switch>
                <Route exact path="/" component={UserListComponent} />
                <Route path="/users" component={UserListComponent} />
                <Route path="/add-user" component={AddUserComponent} />
                <Route path="/edit-user" component={EditUserComponent} />
                <Route path="/codes" component={ComCodeListComponent} />
                <Route path="/codes2" component={CodeListComponent} />
                <Route path="/codes3" component={TabSampleComponent} />
            </Switch>
            </div>
            </BrowserRouter>
        </div>
    );
}

const style = {
    marginTop: '20px'
}

export default AppRouter;