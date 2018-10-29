# Parcel Flow Example

Parcel supports using Flow types out of the box.

In this example we use the `// @flow` pragma at the top of each JS file to have it's types checked.

We also demonstrate the use of [Parcel Absolute Module Resolution](https://parceljs.org/module_resolution.html#flow-with-absolute-or-tilde-resolution) - see the imports in `index.js` as well as `index.html`. Imports are resolved from the **project root**, which is defined as the Parcel entrypoint, which in this case is `src/index.html`, so every `/` import is resolved from the `src/` folder.

For Flow to understand where `/index.js` is actually imported from we need to account for this difference. `module.name_mapper` is a `.flowconfig` option which remaps the imports for Flow. In this instance, `/index.js` must become `src/index.js`.

To run Flow, either install it as an editor indtegration, or run either `yarn run flow` or `npm run flow`.

Running Flow over this example should result in the following error:

```shell
Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ src/index.js:7:28
Cannot assign banana.color to bananaColor because string [1] is incompatible with boolean [2].

     src/index.js
      4│ import banana from "/fruits/banana";
      5│
      6│ let ripeApple: boolean = apple.ripe;
 [2]  7│ let bananaColor: boolean = banana.color;
      8│
      9│ console.log("is the apple ripe?", ripeApple);
     10│ console.log("what is the banana's color", bananaColor);

     src/fruits/banana.js
 [1]  4│   color: "green",
```

## Further Reading:

- [Parcel Absolute Module Resolution](https://parceljs.org/module_resolution.html)
- [FLow with Parcel Absolute or Tilde Module Resolution](https://parceljs.org/module_resolution.html#flow-with-absolute-or-tilde-resolution)
- [Flow](https://flow.org/)
- [Flow `module.name_mapper`](https://flow.org/en/docs/config/options/#toc-module-name-mapper-regex-string)
- [Flow Editor Setup](https://flow.org/en/docs/editors/)
