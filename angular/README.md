# Parcel Angular Example

Parcel supports TypeScript out of the box, so we're halfway there!

This example is more complex and requires the importing of many supporting libraries (Parcel does not auto-import these deps at this time).

Notable files include:

- [libs.ts](src/libs.ts) and it's inclusion in [index.html](src/index.html)
- [app.css](src/app.css) importing into [index.html](src/index.html) to style the `<html>`, `<body>` and `<main>` tags.
- [package.json](src/package.json) deps.

## Further Reading

- [Angular Docs](https://angular.io/)
- [DeMoorJasper's more complex Angular ParcelJS Boilerplate this is based off of](https://github.com/DeMoorJasper/Angular-Parcel-Boilerplate)
- [Parcel's Tile Path Module Resolution](https://parceljs.org/module_resolution.html)
- [TypeScript example with Tilde Module Resolution](typescript-react-with-tilde-module-resolution)