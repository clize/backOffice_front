import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavSideBar from './NavSideBar'

import DashBoardComponent from "../menu/DashBoardComponent"
import AddUserComponent from "../menu/AddUserComponent"
import EditUserComponent from "../menu/EditUserComponent"
import ComCodeListComponent from "../menu/ComCodeListComponent"
import CodeListComponent from "../menu/CodeListComponent"
import ComCodeList from "../../view/select/ComCodeList"
import BatchRsltComponent from "../check/BatchRsltComponent"
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
                    <Route path="/codes2" component={CodeListComponent} />
                    <Route path="/comcodelist" component={ComCodeList} />
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