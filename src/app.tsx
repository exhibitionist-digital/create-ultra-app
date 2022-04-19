import React from "react";
import { SWRConfig } from "swr";
import { Helmet } from "react-helmet";
import { Route, Switch } from "wouter";
import ultraCache from "ultra/cache";
import { Cache } from "https://deno.land/x/ultra/src/types.ts";

const options = (cache: Cache) => ({
  provider: () => ultraCache(cache),
  suspense: true,
});

const Ultra = ({ cache }: { cache: Cache }) => {
  return (
    <SWRConfig value={options(cache)}>
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
    </SWRConfig>
  );
};

export default Ultra;
