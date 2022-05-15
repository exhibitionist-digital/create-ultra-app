import React from "react";
import { Helmet, HelmetProvider } from "react-helmet";
import { Route, Switch } from "wouter";
import type { RenderState } from "http://127.0.0.1:8080/server.ts";

type AppProps = {
  state: RenderState;
};

const Ultra = ({ state }: AppProps) => {
  return (
    <HelmetProvider context={state}>
      <html lang="en">
        <head>
          <Helmet>
            <title>Ultra</title>
            <link rel="icon" type="image/x-icon" href="/public/favicon.ico" />
            <link rel="stylesheet" href="/public/style.css" />
          </Helmet>
        </head>
        <body>
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
        </body>
      </html>
    </HelmetProvider>
  );
};

export default Ultra;
