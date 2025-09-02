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
  <script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js"
  ></script>
  <script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  ></script>
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
   React.createElement(
     "h1",
     { id: "heading", class: "first heading" },
     "Welcome to react"
   );
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
  const element = React.createElement("h1", null, "Hello, world!");
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
1. **Class Components**: ES6 classes that extend `React.Component` and have a `render` method. (Old Method to create components)
   - Example:
   ```jsx
   class MyComponent extends React.Component {
     render() {
       return <h1>Hello, world!</h1>;
     }
   }
   ```

- Functional components always Start with a capital letter.

* Components composition is the process of combining multiple components to create a more complex UI.
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
* JSX Protect against XSS (Cross-Site Scripting) attacks by escaping values embedded in JSX.
* This means that any user input or dynamic content rendered in JSX is automatically sanitized to prevent malicious scripts from executing.
* But cross-site scripting can happen in JS

13. In JSX

-

```jsx
<MyComponent />
```

- is equivalent to

```jsx
<MyComponent></MyComponent>
```

- equivalent to

```jsx
{
  MyComponent();
}
```

---

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
  <Welcome name="Alice" />;
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
        city: "Wonderland",
      },
    },
  };

  // Using optional chaining to access the city property
  const city = user.profile?.address?.city; // "Wonderland"
  const country = user.profile?.address?.country; // undefined (no error)
  ```

- Optional chaining is useful when dealing with complex objects or APIs where some properties may not always be present, allowing you to avoid unnecessary checks and errors.

---

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

- async/await is a syntax for working with Promises in JavaScript.
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
- await can only be used inside an `async` function.
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

---

# Episode - 7 (Routing)

1. useEffect

- If there is no dependency array than it runs after every render.
- If the dependency array is empty, it runs only once after the initial render.
- If the dependency array has values, it runs only when those values change.

2. useState

- Never call useState inside a loop, condition, or nested function.
- Always call it at the top level of your component.
- Never call useState outside the function component.

3. Configuration

- It's a information which tells us what happened at specific points at router call.

* The word "use" is a convention in React for naming hooks.

4. To import Router

- Use the following import statement:

```javascript
import { createBrowserRouter, RouterProvider } from "react-router";
```

5. createBrowserRouter

- It is a function that creates a router instance for your application.
- It takes an array of route objects as an argument.
- Each route object defines a path and the component to render for that path.

6. RouterProvider

- It is a component that provides the router instance to your application.
- It wraps your application and allows you to use routing features.
  - You need to pass the router instance created by `createBrowserRouter` to it.

7. element:
   Purpose: The element property is used to specify the main component that should be rendered for a particular route.

When it's used: It’s rendered when the route path matches the current URL.

How it works: The component provided in element is rendered as the content for the route.

```jsx
    Example:
    {
      path: '/',
      element: <AppLayout/>  // This will be rendered for the '/' route
    }
```

8. errorElement:

Purpose: The errorElement property is used to specify the fallback component that should be rendered when an error occurs while rendering the route. This is like an error boundary for the specific route.

When it's used: If a route throws an error (such as a failed data fetch or a React component error), the errorElement will be rendered instead of the element.

How it works: It’s rendered when the route throws an error during rendering, and is used to handle errors at the route level. 9. What does Outlet component do?

- The Outlet component is used to render child routes within a parent route.
- It acts as a placeholder for the child components of a route.
- When a parent route is matched, the Outlet component renders the child route that matches the current URL.
- It allows you to create nested routes in your application.

```jsx
Example: import { Outlet } from "react-router";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet /> {/* This will render the child route components */}
      <Footer />
    </div>
  );
};
```

10. Link Component from React

- It's same as anchor tag used in html
- But, it doesn' t re-render the Component
- instead of 'href' we use 'to'

11. Two types of Routing in web applications:
1. **Client-side routing**: Handled by the browser, where the application dynamically updates the content without reloading the page.
1. **Server-side routing**: Handled by the server, where each request for a new page results in a full page reload.

---

# Episode 8 (Class Components)

1. What is a Class Component?

- A class component is a JavaScript class that extends the React.Component class.
- It must have a render() method that returns JSX.
- Class components can hold and manage their own state.
- They can also use lifecycle methods to perform actions at specific points in the component's lifecycle.

2. What does super(props) do in constructor?
   - It calls the constructor of the parent class (React.Component) with the props argument.
   - This is necessary to properly initialize the component and make the props available in the component.

3. why we use React.Component in Class
  - It provides the base functionality for class components in React.
  - By extending React.Component, the class component gains access to important features like state management and lifecycle methods.
4. **this.state**
  - this.state is an object that holds the component's local state.
  - It allows class components to manage and update their own state.
  - State can be initialized in the constructor and updated using this.setState().
  - It contains multiple state variables in it.
  ```jsx
  this.state = {
    count: 0,
    count2: 1,
  };
  ```
  * Never update state variable directly, Use this.setState() instead and you can use this.setState() anywhere in the class component to update the state.
  ```jsx
  this.setState({ count: this.state.count + 1 });
  ```
  If there are multiple state variables in this.state, you can update many variable which pass inside the object of this.setState and other variables will remain unchanged.
  ```jsx
  this.setState({ count: this.state.count + 1, count2: this.state.count2 + 1 });
  ```
5. **Lifecycle of a Class Component in React**

- The lifecycle of a class component describes the sequence of methods that are called during its existence in the application. Here’s a simplified flow:

  1. **Constructor**: Initializes the component (sets up state, binds methods).
  2. **Render**: Returns the JSX to display the UI.
  3. **ComponentDidMount**: Runs once after the component is added to the DOM (good for data fetching or subscriptions).
  4. **State/Props Changes**: When state or props change, React decides if the component should update.
  5. **shouldComponentUpdate**: Lets you control whether the component should re-render (optional).
  6. **Render (again)**: If an update is needed, render is called again.
  7. **ComponentDidUpdate**: Runs after the component updates (useful for reacting to changes).
  8. **ComponentWillUnmount**: Runs before the component is removed from the DOM (cleanup tasks like removing event listeners).

- This lifecycle helps you manage data, side effects, and cleanup in class components. 
    ``` jsx
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
      console.log(" Parent Constructor");
    }

    componentDidMount() {
      // Fetch data or set up subscriptions
      console.log(" Parent Component Did Mount");
    }

    render() {
      return(
        <div>Count: {this.state.count}
        console.log(" Parent Render");
        <Name />
        </div>;
      ) 
    }
  }
  class Name extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "React" };
      console.log(" Child Constructor");
    }

    componentDidMount() {
      // Fetch data or set up subscriptions
      console.log(" Child Component Did Mount");
    }

    render() {
      return(
        <div>Name: {this.state.name}
        console.log(" Child Render");
        </div>;
      ) 
    }
  }
  ```
- The order of execution will be:
  1. Parent Constructor
  2. Parent Render
  3. Child Constructor
  4. Child Render
  5. Child Component Did Mount
  6. Parent Component Did Mount

6. **ComponentDidMount()**
- It is a lifecycle method in class components that runs once after the component is mounted (added to the DOM).
- It is commonly used for data fetching, setting up subscriptions, or initializing third-party libraries.
7. **ComponentDidUpdate**
- It is a lifecycle method that runs after the component updates (re-renders) due to changes in state or props.
- It is useful for reacting to changes, such as fetching new data when props change or updating the DOM based on state changes.
8. **ComponentWillUnmount** 
- It is a lifecycle method that runs just before the component is removed from the DOM.
- It is used for cleanup tasks, such as removing event listeners, canceling network requests, or clearing timers to prevent memory leaks.

---
# Episode - 9 (Optimizing Our App)

1. **Should we follow the Single Responsibility Principle in React?**
  - Yes, React components should follow the Single Responsibility Principle (SRP).
  - SRP means each component should focus on a single functionality or concern.
  - This makes components more modular, maintainable, and reusable.
  - It also simplifies testing and debugging, as each component has a clear purpose.

2. **What is a Hook?**
  - Hooks are special functions in React that let you use state and other React features in functional components.
  - Introduced in React 16.8, hooks allow stateful logic and side effects without class components.
  - Common hooks include `useState`, `useEffect`, `useContext`, `useReducer`, and custom hooks.
  - Hooks must be called at the top level of a component or inside custom hooks, not inside loops or conditions.

3. **Custom Hook**
  - A custom hook is a reusable function that encapsulates stateful logic using built-in React hooks.
  - Custom hooks help share logic between components without duplicating code.
  - They always start with the prefix `use` and can call other hooks inside.
  - Example:
    ```jsx
      // Import hooks from the React package (not a file path)
            import { useState, useEffect } from "react";
      function useOnlineStatus() {
      const [isOnline, setIsOnline] = useState(navigator.onLine);

      useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
          window.removeEventListener("online", handleOnline);
          window.removeEventListener("offline", handleOffline);
        };
      }, []);

      return isOnline;
      }
    ```

4. **Chunking / Code Splitting / Lazy Loading / Dynamic Bundling**
  - These are optimization techniques to improve app performance.
  - **Chunking**: Breaking your app into smaller pieces (chunks) that can be loaded separately.
  - **Code Splitting**: Loading only the code needed for the current view, instead of the entire app.
  - **Lazy Loading**: Loading components or resources only when they are needed, not upfront.
  - **Dynamic Bundling**: Creating bundles on demand, so users download only what they need.
  - These techniques reduce initial load time and improve user experience, especially in large applications.
5. **React.lazy()**
  - React.lazy() is a function that allows you to load components lazily, meaning they are only loaded when they are needed.
  - It helps improve performance by reducing the initial load time of your application.
  - You can use React.lazy() with dynamic imports to split your code into smaller chunks.
  - Example:
    ```jsx
    import React, { Suspense } from "react";

    const LazyComponent = React.lazy(() => import("./LazyComponent"));

    function App() {
      return (
        <div>
          <h1>My App</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        </div>
      );
    }
    ```
  - In this example, LazyComponent is loaded only when it is rendered, and while it is loading, a fallback UI (Loading...) is shown.
  - Suspense is used to wrap the lazy-loaded component and provide a fallback UI while it is being loaded.
6. **Suspense**
  - Suspense is a React component that allows you to display a fallback UI while waiting for some asynchronous operation to complete, such as loading a lazy-loaded component or fetching data.
  - It is used in conjunction with React.lazy() for lazy loading components.
---------------------
# Episode - 10 (Tailwind CSS)

1. Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined classes to style your HTML elements.
2. It allows you to build custom designs quickly by composing utility classes directly in your HTML.
3. Tailwind CSS is highly customizable, allowing you to configure colors, spacing, typography, and more through a configuration file.
4. It promotes a mobile-first approach to responsive design, with built-in support for responsive breakpoints.
5. Tailwind CSS encourages a component-based approach to styling, making it easy to create reusable styles.
6. It includes a wide range of utility classes for common CSS properties, such as layout, typography, colors, and effects.
7. Tailwind CSS can be integrated with various build tools and frameworks, including React, Vue, and Angular.
---------------
# Episode - 11 (Data is the new oil)

1. **Higher Order Component (HOC)**
  - A Higher Order Component (HOC) is a function that takes a component and returns a new component with enhanced functionality.
  - HOCs are used to share common logic or behavior between multiple components without duplicating code.
  - They can add props, manage state, or handle side effects for the wrapped component.
  - Example:
    ```jsx
    function withLogging(WrappedComponent) {
      return class extends React.Component {
        componentDidMount() {
          console.log("Component mounted");
        }

        render() {
          return <WrappedComponent {...this.props} />;
        }
      };
    }
    ```
- In this example, `withLogging` is an HOC that logs a message when the wrapped component mounts.
2. **What is Controlled and uncontrolled components in React?**
  - Controlled Component:
    - A controlled component is a form element (like input, textarea, select) whose value is controlled by React state.
    - The value of the form element is set by the state, and any changes to the form element update the state.
    - Example:
      ```jsx
      function ControlledInput() {
        const [value, setValue] = useState("");

        return (
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        );
      }
      ```
  - Uncontrolled Component:
    - An uncontrolled component is a form element that maintains its own internal state.
    - The value of the form element is not controlled by React state, and you can access its value using refs.
    - Example:
      ```jsx
      function UncontrolledInput() {
        const inputRef = useRef(null);

        const handleSubmit = () => {
          console.log(inputRef.current.value);
        };

        return (
          <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        );
      }
      ```
3. **Lifting State Up**
  - Lifting state up is a technique in React where you move the state from a child component to a common parent component.
  - This allows multiple child components to share and synchronize their state through the parent.
  - It is useful when you have sibling components that need to communicate or share data.
  - Example:
    ```jsx
    function Parent() {
      const [sharedState, setSharedState] = useState("");

      return (
        <div>
          <ChildA sharedState={sharedState} setSharedState={setSharedState} />
          <ChildB sharedState={sharedState} />
        </div>
      );
    }

    function ChildA({ sharedState, setSharedState }) {
      return (
        <input
          type="text"
          value={sharedState}
          onChange={(e) => setSharedState(e.target.value)}
        />
      );
    }

    function ChildB({ sharedState }) {
      return <div>Shared State: {sharedState}</div>;
    }
    ```
4. **Props Drilling**
  - Props drilling is the process of passing data from a parent component to a deeply nested child component through multiple layers of intermediate components.
  - It can lead to cumbersome and hard-to-maintain code, especially when many components need access to the same data.
  - To avoid props drilling, you can use state management libraries (like Redux or Context API) to share state across components without passing props through every level of the component tree.

5. **Context**
  - Context is a React feature that allows you to share data across the component tree without passing props down manually at every level.
  - It is useful for global data that many components need, such as themes, user authentication, or language settings.
  - You create a context using `React.createContext()`, provide a value using a `Provider`, and consume the value in child components using `useContext` or `Context.Consumer`.
  - Example:
    ```jsx
    const ThemeContext = React.createContext("light");

    function App() {
      return (
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
      );
    }

    function Toolbar() {
      return (
        <div>
          <ThemedButton />
        </div>
      );
    }

    function ThemedButton() {
      const theme = useContext(ThemeContext);
      return <button className={theme}>I am styled by theme context!</button>;
    }
    ```
  - In this example, `ThemeContext` is created and provided with a value of "dark". The `ThemedButton` component consumes the context value using `useContext`.
6. **useContext Hook**
  - The `useContext` hook is a React hook that allows you to consume context values in functional components.
  - It takes a context object (created by `React.createContext`) as an argument and returns the current context value.
  - Example:
    ```jsx
    const ThemeContext = React.createContext("light");

    function ThemedButton() {
      const theme = useContext(ThemeContext);
      return <button className={theme}>I am styled by theme context!</button>;
    }
    ```
  - In this example, `ThemedButton` uses the `useContext` hook to access the current value of `ThemeContext`.
  