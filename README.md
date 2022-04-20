# Create Ultra App

```sh
git clone https://github.com/exhibitionist-digital/create-ultra-app
cd create-ultra-app
deno task dev
```

Requires Deno 1.20.6+

**Dev**

`deno task dev` will start a local server on port 8000

**Vendor**

`deno task vendor` will create a vendored import map: `vendorMap.json`. You can
plug this back into Ultra using the deno.json `importMap`. This will use local
dependencies when running Ultra in the future.

**Start**

`deno task start` will run the server in production mode. Cached ESM imports,
and no websocket reloader.

**Cache**

`deno task cache` will refresh the cache for `server.ts`. This can be useful if
you run into any issues when swapping in between vendored and CDN import maps.
