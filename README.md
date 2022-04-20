# Create Ultra App

```sh
git clone https://github.com/exhibitionist-digital/create-ultra-app
cd create-ultra-app
deno task dev
```

Requires Deno 1.20.6+

### Dev

`deno task dev` will start a local server on port 8000.

### Vendor

`deno task vendor` will create a vendored import map: `vendorMap.json`.

You can plug this back into Ultra in the `deno.json` config file.

```javascript
{
  "tasks": {
    // tasks omitted for clarity
  },
  "importMap": "vendorMap.json" // use either importMap.json or vendorMap.json
}
```

> Note: You will need to restart the server when swapping import maps.

### Start

`deno task start` will run the server in production mode. Cached ESM imports,
and no websocket reloader. Uses whichever import map you have defined.

### Cache

`deno task cache` will refresh the cache for `server.ts`. This can be useful if
you run into any issues when swapping in between vendored and CDN import maps.
