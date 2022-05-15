import React from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "wouter";

const Ultra = () => {
  return (
    <>
      <Helmet>
        <title>Ultra</title>
        <link rel="stylesheet" href="/style.css" />
      </Helmet>
      <main>
        <Switch>
          <Route path="/">
            <h1>@__@</h1>
          </Route>
          <Route>
            <strong>404</strong>
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default Ultra;
