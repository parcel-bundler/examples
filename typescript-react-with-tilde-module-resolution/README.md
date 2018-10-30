# Parcel Tilde Module Resolution with TypeScript React Example

Parcel supports TS out of the box!

Much like Flow, the TS typechecker is unaware of any use of Parcel's Module Resolution methods. This means supporting Absolute Path imports is difficult (please share examples if you have any) at this time. Fortunately, we can achieve a similar result with Parcel's Tilde Path Module Resolution and the `tsconfig` `baseUrl` and `path` properties.

Using the following `tsconfig` settings:

```json
  "baseUrl": ".",
  "paths": {
    "~*": ["src/*"]
  }
```

we can import like this:

```javascript
// main.tsx
import '~/App'
```

Parcel looks for `App` in the **package root** but falls back to the **project root** (defined as the entry point directory), which in this example is the `src/` folder.

Meanwhile, TypeScript sees the `~` and performs a lookup in the `tsconfig.json` `paths` object and finds the `src/` folder.

TypeScript support is ongoing. [Please see this issue for a collection of issues and updates](https://github.com/parcel-bundler/parcel/issues/1378)

## Further Reading

- [TypeScript docs](https://www.typescriptlang.org/docs/home.html)
- [Parcel Module Resolution](https://parceljs.org/module_resolution.html)
- [Parcel Tilde Path Module Resolution with TypeScript](https://parceljs.org/module_resolution.html#typescript-~-resolution)
- [TypeScript Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)
