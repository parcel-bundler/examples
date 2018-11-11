# Parcel with Flow

Parcel supports using Flow types out of the box.

In this example we use the `.flowconfig` file to instruct Parcel to use Flow and the `// @flow` pragma at the top of each JS file to specify those files to be type-checked.

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
     10│ console.log("what is the banana's color?", bananaColor);

     src/fruits/banana.js
 [1]  4│   color: "green",
```

## Further Reading:

- [Flow](https://flow.org/)
- [Flow Editor Setup](https://flow.org/en/docs/editors/)

For an example supporting Parcel's Absolute Module Resolution, see [Parcel Absolute Module Resolution with Flow](https://github.com/parcel-bundler/examples/tree/master/flow-with-absolute-module-resolution).
