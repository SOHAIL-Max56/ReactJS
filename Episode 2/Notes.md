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

-----------------------------------------------------------------------------------------------

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
_______________________________________________________________________________________________
# Episode - 4 Notes
1. **Props** in React are used to pass data from a parent to a child component.

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
-----------------------------------------------------------------------------------------------
# Episode - 6 Notes
1. Shimmer Effect
   - A placeholder UI element that indicates loading content.
   - Typically used in skeleton screens to improve perceived performance.
   - Can be implemented using CSS animations or libraries.
2. useEffect
   - A React Hook that allows you to perform side effects in functional components.
   - It takes two arguments: a function to run and a dependency array.
   - The effect runs after the render and can be used for data fetching, subscriptions, or manually changing the DOM.
   - Cleanup can be done by returning a function from the effect.
   - Example 
   ```jsx
   import { useEffect } from "react";

   function MyComponent() {
     useEffect(() => {
       // Side effect logic here
       return () => {
         // Cleanup logic here
       };
     }, []);

     return <div>My Component</div>;
   }
   ```
3. Fetch Data
   - Use the `fetch` API to retrieve data from a server.
   - Can be used inside `useEffect` for data fetching on component mount.
   - Example:
   ```jsx
   import { useEffect, useState } from "react";

   function MyComponent() {
     const [data, setData] = useState(null);

     useEffect(() => {
       const fetchData = async () => {
         const response = await fetch("https://api.example.com/data");
         const json = await response.json();
         setData(json);
       };

       fetchData();
     }, []);

     return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
   }
   ```
* async/await is a syntax for working with Promises in JavaScript.
    - It allows you to write asynchronous code that looks synchronous, making it easier to read and maintain.
    - Example:
  ```javascript
  async function fetchData() {
    try {
      const response = await fetch("https://api.example.com/data");
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  ```
* await can only be used inside an `async` function.
  - It pauses the execution of the function until the Promise is resolved or rejected.
3. What is Conditional Rendering ?
   - Conditional rendering is a technique in React that allows you to render different UI elements based on certain conditions.
   - It can be achieved using JavaScript operators like `if`, `ternary`, or logical `&&`.
4. useState is used to manage state in functional components.
   - It returns an array with two elements: the current state value and a function to update it.
   - Example:
   ```jsx
   import { useState } from "react";

   function MyComponent() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }
   ```
   - count is special varible provided by useState in React.
   - Whenever the state is updated using the setCount function, the component re-renders with the new count value.
   - It re-renders the whole MyComponent tree again.
   - It allows to make dynamic changes to the UI based on user interactions or other events.
5. All the state variable comes from named imports, such as `useState` and `useEffect`. It comes from React.
6. When there is change in Local state variable React re-renders the component to reflect the updated state.
   - This ensures that the UI is always in sync with the current state of the application.
   - React uses a virtual DOM to efficiently update the UI by only re-rendering the components that have changed.
7. Microservice is method in which applications are broken down into smaller, independent services that communicate over APIs.
   - Each service is responsible for a specific functionality and can be developed, deployed, and scaled independently.
   - This architecture promotes flexibility, maintainability, and allows teams to work on different services simultaneously.
   - Load the page -> Render the UI -> API (fetch data) -> Render it with new data.
8. **How we make a search button on React ?**
    - Create a search input field and a button.
    - Use `useState` to manage the search query.
    - On button click, update the state with the search query and trigger a function to fetch or filter data based on the query.
    - Example:
    ```jsx
    import { useState } from "react";
  
    function SearchComponent() {
      const [query, setQuery] = useState("");
  
      const handleSearch = () => {
        console.log("Searching for:", query);
        // Fetch or filter data based on query
      };
  
      return (
        <div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      );
    }
    ```
