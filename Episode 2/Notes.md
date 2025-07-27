# Episode - 2

- Package(dependencies) .json is the configuration for npm
- vite/parcel/web pack->Bundler -- Make it production ready 
- There are two type of dependencies(Package) 1. Normal dependencies
                                              2. Web dependencies

## Tilde (~)
1. The tilde allows only patch-level updates within a specified minor version. 
2. It's represented as ~Major.Minor.Patch (e.g., ~1.2.3).
3. This notation will match any version greater than or equal to 1.2.3 but less than 1.3.0.
4. It ensures that you receive bug fixes and minor improvements while maintaining stability and compatibility within the specified minor version.
5. The minor version (the middle number) is locked and will not change when using the tilde. 

## Caret (^)
1. The caret allows both minor and patch-level updates while keeping the major version locked. 
2. It's represented as ^Major.Minor.Patch (e.g., ^1.2.3).
3. This notation will match any version greater than or equal to 1.2.3 but less than 2.0.0.
4. The caret allows you to benefit from new features and improvements introduced in minor updates while avoiding potentially breaking changes in new major versions.
5. The major version (the first number) is locked and will not change when using the caret.
6. It is the default behavior when installing packages without specifying a version range. 

## Parcel 
- Dev build
- Local server
- HMR = Hot Module Replacement 
- File watching Algo -- C++
- Caching - fast building
- Image optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Differential bundling -- Support older browser
- Diagnostic 
- HTTPS
- Error handling 
- Tree shaking -- Remove unused code 
- Different dev and production bundles


* Package_lock.json: It contain the detail version of packages used at production time
* node_modules: it's a database for dependencies or packages we installed form npm
* parcel need help of other dependencies which contain in node_modules
    which has list of packages need by parcel for work
    
* To execute a Package we used npx 
* we doesn't get react package from cdn because once version of react update we couldn't get it 
``` html
<script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
<script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>

```
* we install react from npm 

* This thing app.js have normal js file but it's not true 
``` html
<script src="app.js">
```
* we use type = "module" 
``` html
<script type="module" src="app.js">
```
- if we don't use 'type' then it show error at website 

* Instead of using npx parcel index.html we will use to add this in package.json script 
```json
"start": "parcel index.html",
 "build": "parcel build index.html",
```
* Run npm start === npx parcel index.html  