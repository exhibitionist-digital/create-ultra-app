import { Router } from "wouter";
import createServer from "http://127.0.0.1:8080/server.ts";
import { reactHelmetPlugin } from "http://127.0.0.1:8080/src/plugins/react-helmet.ts";
import { ServerAppProps } from "http://127.0.0.1:8080/src/types.ts";
import App from "./src/app.tsx";

/**
 * API handlers
 */
import helloWorldHandler from "./api/example.ts";

/**
 * This is the component that will be rendered server side.
 */

function ServerApp({ state }: ServerAppProps) {
  return (
    <Router hook={staticLocationHook(state.url.pathname)}>
      <App state={state} />
    </Router>
  );
}

const server = await createServer(ServerApp, {
  mode: "development",
  bootstrapModules: ["./client.tsx"],
});

/**
 * Custom routes
 */
server.get("/api/example", helloWorldHandler);

/**
 * Middleware
 */
server.use((next) => {
  return async function requestHandler(context) {
    const startTime = performance.now();
    const response = await next(context);
    const endTime = performance.now();

    console.log(
      `[${context.request.method}]: ${context.url.toString()} duration ${
        (endTime - startTime).toFixed(2)
      }ms`,
    );

    return response;
  };
});

/**
 * Register server plugins
 */
server.register(reactHelmetPlugin);

/**
 * Start the server!
 */
server.start({ port: 8000 });

/**
 * Server side wouter
 */
type Navigate = (to: string, opts?: { replace?: boolean }) => void;

function staticLocationHook(
  path = "/",
  { record = false } = {},
) {
  // deno-lint-ignore prefer-const
  let hook: { history?: string[] } & (() => [string, Navigate]);

  const navigate: Navigate = (to, { replace } = {}) => {
    if (record) {
      if (replace) {
        hook.history?.pop();
      }
      hook.history?.push(to);
    }
  };

  hook = () => [path, navigate];
  hook.history = [path];

  return hook;
}
