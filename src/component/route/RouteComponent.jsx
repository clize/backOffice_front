import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavSideBar from './NavSideBar'

import DashBoardComponent from "../menu/DashBoardComponent"
import AddUserComponent from "../menu/AddUserComponent"
import EditUserComponent from "../menu/EditUserComponent"
import ComCodeListComponent from "../menu/ComCodeListComponent"
import ComCodeList from "../../view/select/ComCodeList"
import BatchRsltComponent from "../check/BatchRsltComponent"
import ComCodeComponent from "../master/ComCodeComponent"
import IfDataComponent from "../lookup/IfDataComponent"
import { Container } from '@material-ui/core';


const SiteInformation = React.lazy(() =>
    import(/* webpackChunkName: "viwes-second-menu" */ '../../view/sample/sample')
);

const AppRouter = () => {
    return(
        <div>
            <BrowserRouter>
            <div>
              <NavSideBar />
              <Container>
                <Switch>
                    <Route exact path="/" component={DashBoardComponent} />
                    <Route path="/users" component={DashBoardComponent} />
                    <Route path="/add-user" component={AddUserComponent} />
                    <Route path="/edit-user" component={EditUserComponent} />
                    <Route path="/codes" component={ComCodeListComponent} />
                    <Route path="/comcodelist" component={ComCodeList} />
                    <Route path="/comcode" component={ComCodeComponent} />
                    <Route path="/batchRslt" component={BatchRsltComponent} />
                    <Route path="/lookup-if-data" component={IfDataComponent} />
                    <Route
                    path={`/profile`} render={props => <SiteInformation {...props} />}
                />
                </Switch>
              </Container>              
            </div>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;