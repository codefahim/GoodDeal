import React from 'react';
import styles from './Body.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ManageOrder from '../BodyUtili/ManageOrder';
import ManageUser from '../BodyUtili/ManageUser';
import DealDay from '../BodyUtili/DealDay/DealDay';
const Body = () => {
  return (
    <section className={styles.body}>
      <Switch>
        <Route exact path='/'>
          <ManageOrder />
        </Route>
        <Route path='/ManageOrder'>
          <ManageOrder />
        </Route>
        <Route path='/ManageUser'>
          <ManageUser />
        </Route>
        <Route path='/DealDay'>
          <DealDay />
        </Route>
      </Switch>
    </section>
  );
};

export default Body;