# Parcel with Flow & React

Parcel supports using Flow types and React out of the box.

In this example we use the `.flowconfig` file to instruct Parcel to use Flow and the `// @flow` pragma at the top of each JS file to specify those files to be type-checked.

Importantly, the use of the `state` class-property in the `App.jsx` React class requires us to add a `.babelrc` file with the `@babel/plugin-proposal-class-properties` plugin. Parcel will install all dependencies within the `.babelrc` file automatically.

To run Flow, either install it as an editor indtegration, or run either `yarn run flow` or `npm run flow`.

Running Flow over this example should result in the following error:

```shell
Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ src/index.js:7:28
Cannot create App element because property reactMessage is missing in props [1] but exists in Props [2].

     src/main.js
      4│ import { render } from 'react-dom'
      5│ import App from './App'
      6│
 [1]  7│ render(<App  />, document.getElementById('app'))
      8│

     src/App.jsx
 [2] 14│ export default class App extends React.Component<Props, State> {
```

**IMPORTANT**: Adding the prop `<App reactMessage={"React"} />` will correct this error, producing a complete output sentence.

## Further Reading

- [Flow](https://flow.org/)
- [Flow Editor Setup](https://flow.org/en/docs/editors/)

For an example supporting Parcel's Absolute Module Resolution, see [Parcel Absolute Module Resolution with Flow](https://github.com/parcel-bundler/examples/tree/master/flow-with-absolute-module-resolution).
