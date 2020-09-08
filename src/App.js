import React from 'react';
import AppRouter from './component/route/RouteComponent';
import NavSideBar from './component/route/NavSideBar';
import Container from '@material-ui/core/Container';


function App() {
  return (
    <div>
      <NavSideBar/>
      <Container>
      <AppRouter />
      </Container>
    </div>
  );
}

export default App;
