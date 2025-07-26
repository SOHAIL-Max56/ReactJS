{
  /* <div id="parent">
  <div id="child1">
    <h1>Hello World</h1>
    <h2>Welcome to React</h2>
    </div>
    <div id="child2">
    <h1>Hello World</h1>
    <h2>Welcome to React</h2>
    </div>
</div> */
}

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
   React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
