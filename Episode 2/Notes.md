# Episode - 2 Notes

- `package.json` is the main configuration file for npm dependencies.
- Bundlers like Vite, Parcel, and Webpack prepare your code for production by optimizing and packaging it.
- There are two types of dependencies:
  1. **Normal dependencies**: Used in your application code.
  2. **Dev dependencies**: Used only during development (e.g., bundlers, testing tools).

## Tilde (~) in Versioning
- The tilde (`~`) allows updates to patch versions only, within the same minor version.
- Example: `~1.2.3` matches versions `>=1.2.3` but `<1.3.0`.
- You get bug fixes and minor improvements, but the minor version is locked.

## Caret (^) in Versioning
- The caret (`^`) allows updates to both minor and patch versions, but keeps the major version locked.
- Example: `^1.2.3` matches versions `>=1.2.3` but `<2.0.0`.
- You get new features and improvements, but avoid breaking changes from major updates.
- This is the default when installing packages without specifying a version.

## Parcel Features
- Provides a development build and local server.
- Supports Hot Module Replacement (HMR) for instant updates.
- Uses a fast file watching algorithm (written in C++).
- Handles caching, image optimization, minification, bundling, compressing, consistent hashing, differential bundling (for older browsers), diagnostics, HTTPS, error handling, tree shaking (removes unused code), and separate dev/production bundles.

- `package-lock.json` records the exact versions of packages used in production.
- `node_modules` is the local database of installed npm packages.
- Parcel relies on dependencies listed in `node_modules` to work.

- Use `npx` to execute packages directly.
- Avoid using React from a CDN because updates may break your app. Instead, install React via npm:
  ```html
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  ```
- Install React from npm for better version control.

- By default, `<script src="app.js">` treats the file as a normal JS file. To use ES modules, specify:
  ```html
  <script type="module" src="app.js"></script>
  ```
- Omitting `type="module"` can cause errors in modern browsers.

- Instead of running `npx parcel index.html` every time, add scripts to `package.json`:
  ```json
  "start": "parcel index.html",
  "build": "parcel build index.html"
  ```

---

# Episode - 3 Notes

- Running `npm start` is equivalent to `npx parcel index.html`.
1. `React.createElement` creates a JavaScript object, which React renders as HTML.
2. If you see `<h1>Not Render</h1>`, there may be a rendering issue.
3. `React.createElement` takes three arguments: HTML tag, props, and children.
   ```js
   React.createElement('h1', { id: "heading", class: "first heading" }, 'Welcome to react')
   ```
- **JSX** is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript files.
- JSX is not required for React, but it makes components easier to write and read.

### What is JSX?
- JSX lets you write HTML-like tags directly in JavaScript.
- It improves readability and expressiveness.
- JSX is compiled into `React.createElement()` calls behind the scenes.
  ```jsx
  // JSX
  const element = <h1>Hello, world!</h1>;

  // Compiled JavaScript
  const element = React.createElement('h1', null, 'Hello, world!');
  ```

6. **Pure React (without JSX):**
   ```js
   const heading = React.createElement("h1", { id: "heading" }, "React day 3");
   ```
7. **React using JSX:**
   ```jsx
   const heading = <h1 id="heading">React day 3</h1>;
   ```
- Both approaches are equivalent, but JSX is more readable and preferred.

8. The rendering flow: JSX → `React.createElement` → Object → Render → HTML.
9. Babel compiles JSX into JavaScript code that React understands.
10. JSX attributes are written in camelCase, similar to JavaScript properties.
  - Example: `className` instead of `class`, `htmlFor` instead of `for`.
11. If you need to pass a JavaScript expression as an attribute value, wrap it in curly braces.
  - Example: `<h1 id={headingId}>Hello, world!</h1>`.
- JSX allows you to use JavaScript expressions inside curly braces `{}`.
- You can use variables, functions, and expressions within JSX.
* JSX => babel => React.createElement => Object => Render => HTML
- JSX is not HTML; it is a syntax extension for JavaScript.
- JSX is compiled into JavaScript using Babel, which transforms it into `React.createElement` calls.
- JSX is not required for React, but it makes writing components easier and more readable.
12. React Components are two types:
  1. **Functional Components**: Functions that return JSX.(New Method to create components)
     - Example:
     ```jsx
     function MyComponent() {
       return <h1>Hello, world!</h1>;
     }
     ```
  2. **Class Components**: ES6 classes that extend `React.Component` and have a `render` method. (Old Method to create components)
     - Example:
     ```jsx
     class MyComponent extends React.Component {
       render() {
       return <h1>Hello, world!</h1>;
       }
     }
     ```
* Functional components always Start with a capital letter.
- Components composition is the process of combining multiple components to create a more complex UI.
   -Example:
   ```jsx
   function App() {
     return (
     <div>
       <Header />
       <MainContent />
       <Footer />
     </div>
     );
   }
   ```
- JSX Protect against XSS (Cross-Site Scripting) attacks by escaping values embedded in JSX.
- This means that any user input or dynamic content rendered in JSX is automatically sanitized to prevent malicious scripts from executing.
- But cross-site scripting can happen in JS 
13. In JSX
  - 
  ``` jsx
  <MyComponent />
  ```
  - is equivalent to
  ``` jsx
  <MyComponent></MyComponent>
  ```
  - equivalent to
  ``` jsx
  {MyComponent()}
  ```
# Episode - 4 Notes
14. **Props** in React are used to pass data from a parent to a child component.

- Props are read-only and enable component reusability.
- They are received as an object in functional components (`function MyComponent(props) { ... }`) or via `this.props` in class components.
- Props can be any data type (string, number, array, object, function).
- You can use destructuring for cleaner code:
  ```jsx
  function Welcome({ name }) {
    return <h1>Hello, {name}!</h1>;
  }
  // Usage
  <Welcome name="Alice" />
  ```
- Props are immutable; to update data, manage state in the parent and pass new props down.
- Functions can be passed as props for child-to-parent communication.
**Conflict Driven UI**
 - It refers to a user interface where conflicts arising from combining different UI components or functionalities are proactively identified and managed, either through automated detection and resolution or by providing clear feedback to the user or developer to handle the conflicts manually.
 <!-- This approach aims to improve the overall user experience by minimizing disruptions and ensuring a smoother interaction flow. -->
* Optional chaining is a feature in JavaScript that allows you to safely access deeply nested properties of an object without having to check if each property in the chain exists.
- It uses the `?.` operator to prevent runtime errors when trying to access properties of `undefined` or `null` values.
- Example:
  ```javascript
  const user = {
    profile: {
      name: "Alice",
      address: {
        city: "Wonderland"
      }
    }
  };

  // Using optional chaining to access the city property
  const city = user.profile?.address?.city; // "Wonderland"
  const country = user.profile?.address?.country; // undefined (no error)
  ```
- Optional chaining is useful when dealing with complex objects or APIs where some properties may not always be present, allowing you to avoid unnecessary checks and errors.