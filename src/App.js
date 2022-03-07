import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllEventsPage from './pages/AllEvents';
import NewEventPage from './pages/NewEvent';

const App = () => (
    <Layout>
      <Switch>
        <Route exact path="/">
          <AllEventsPage />
        </Route>
        <Route path="/new-event">
          <NewEventPage />
        </Route>
      </Switch>
    </Layout>
  )

export default App;
