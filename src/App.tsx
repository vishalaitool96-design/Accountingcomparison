import React from 'react';
import { Route, Switch } from 'wouter';
import Layout from './components/Layout';
import Home from './components/Home';
import TopicPage from './components/TopicPage';

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/topic/:id" component={TopicPage} />
      </Switch>
    </Layout>
  );
}
