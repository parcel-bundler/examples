# Parcel NodeJS Example

Parcel supports targeting the `browser` (default), `node` and `electron`.

In this example we use `--target node` in combination with the `package.json` property `node.engines`, to target Node 10 (Node 8 is the default target if no specified in `node.engines` - [src](https://parceljs.org/javascript.html#default-babel-transforms)).

To validate that the correct target is being used, look at the compiled output in `dist/index.js` and then change the `node.engines` value to `>=6` and you will see the async/await calls Babel-ified to be valid Node 6.

## Further Reading:

- [Parcel `--target` flag](https://parceljs.org/cli.html#target)
- [Parcel `--bundle-node-modules` flag](https://parceljs.org/cli.html#force-node-modules-bundling)
